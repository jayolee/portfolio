import React, { Component } from 'react';
import './App.scss';
import './projects.scss'
import logpos from './images/logpos2.jpg'
import dotenote from './images/dotenote.png'
import getcuisine from './images/getcuisine.png'
import up_main from './up/top.png'
import Projects from './projects.js'

class MainProject extends Component {

  constructor(props) {
    super(props);
    this.addActive=this.addActive.bind(this);
    this.state = {
      menu:0,
      page: 0,
      curid:null,
      active:true,
      activelist:['uiux', 'development', 'ideation'],
      deactivelist:[],
    }

  }
  closehandler(){
    setTimeout(this.setState({page:0}), 300);
    
  }
 
  addActive(e){
    let itemlist={
      "logpos":['ideation'],
      "dote":['uiux','ideation'],
      "getcuisine":['uiux','development']
     
    }
   let keylist=Object.keys(itemlist);
   let exist=0;
    let thisDiv=e.target.id;
    let classlist=e.target.classList;
      if(classlist[1]) { 
          e.target.classList.remove("workactive");
          this.state.deactivelist.push(thisDiv);

          this.state.activelist.splice(this.state.activelist.indexOf(thisDiv),1);
          for (let i=0;i<keylist.length;i++){
            exist=1;
            for(let j=0;j<itemlist[keylist[i]].length;j++){
               if(this.state.activelist.includes(itemlist[keylist[i]][j])){
                 exist=0;
               }
          }
          if(exist){
            this.props.wraphide(keylist[i]);
          }
      }
     } else {
      this.state.activelist.push(thisDiv);
    
      this.state.deactivelist.splice(this.state.deactivelist.indexOf(thisDiv),1);
     
          e.target.classList.add("workactive");
          for(let i=0;i<keylist.length;i++){
            if(itemlist[keylist[i]].includes(thisDiv)){
              this.props.reopac(keylist[i]);
            }
          };

     }
  }

//filter
  worktypebar(){
    let element=[];
    let typelist=['uiux', 'development', 'ideation'];
    let typenames={
      'ideation':'Ideation',
      'video':'Video',
      'uiux':'UI/UX',
      'illustration':'Illustration',
      'animation':'Animation',
      'development':'Development',
    }
    for(let i=0;i<typelist.length;i++){
      element.push(
        <div className="worksbutton workactive" key={typelist[i]} onClick={this.addActive} id={typelist[i]}>{typenames[typelist[i]]}</div>
      )
    }
    return element;
  }

  //create boxes
  projects(){
    let element=[];
    let worklist=[
      { "id":"up",
      "image":up_main,
      "class":"uiux development",
      "types": "UI/UX | Development",
      "title": "Up",
    },
      { "id":"dote",
        "image":dotenote,
        "class":"ideation uiux",
        "types": "UI/UX | Ideation",
        "title": "DoteNote",
      },
      { "id":"getcuisine",
      "image":getcuisine,
      "class":"uiux development",
      "types": "UI/UX | Development",
      "title": "Get Cuisine",
    },{ "id":"logpos",
    "image":logpos,
    "class":"ideation",
    "types": "Ideation",
    "title": "LOG + POS",
  },
    ];
    for(let i=0;i<worklist.length;i++){
        element.push(
          <div id={worklist[i].id} key={worklist[i].id} className = "main_work" onClick = {(ev) => this.setState({page : 4, curid:worklist[i].id})}  >
            <div className={"portwrap " + worklist[i].class} key={worklist[i].id+"wrapper"}>
              <img className="longim" alt={worklist[i].title} src={worklist[i].image} key={worklist[i].title+"image"} />
              <div className="discrip">
              {worklist[i].title}<br />
              <span className="types">
              {worklist[i].types}
              </span>
              </div>
            </div>
            <div className="discripsmaller">
            {worklist[i].title}<br />
            <span className="types">{worklist[i].types}</span>
            </div>
          </div>
        )
    }
    element=<div><div className="worktypes">{this.worktypebar()}</div>{element}</div>;
    return element  
  }
  //open details
  renderPageView(){
    if(this.state.page === 4){
      return <Projects key="Projects" idnum={this.state.curid} closehandle={this.closehandler.bind(this)}/>
    };
  }  
  render() {
    return (
        <div className="workbox">
              {this.projects()}
              {this.renderPageView()}
        </div>
       
    );
  }
}

export default MainProject;
