import React, { Component } from 'react';
import './App.scss';
import Projects from './projects.js'
import './projects.scss'
import reporter from './images/lights.jpg'
import even from './images/even2.png'
import momoko from './images/momo.png'
import gssh from './images/gssh.png'
import naoshima from './images/naoshima.png'

class Fun extends Component {

  constructor(props) {
    super(props);
    this.addActive=this.addActive.bind(this);
    this.state = {
      menu:0,
      page: 0,
      curid:null,
      active:true,
      activelist:['uiux', 'code', 'ideation','illustration','animation','video'],
      deactivelist:[],
    }
    this.typelist=['uiux', 'development', 'ideation','illustration','animation','video'];
    this.typenames={
      'ideation':'Ideation',
      'video':'Video',
      'uiux':'UI/UX',
      'illustration':'Illustration',
      'animation':'Animation',
      'development':'Development',
    }
    this.itemlist={
      "naoshima":['code','uiux','illustration'],
      "reporter":['uiux','illustration'],
      "even":['uiux'],
      "momo":['animation'],
      "gssh":['video'],
      
    }
    this.worklist=[
      { "id":"naoshima",
      "href":".js",
      "image":naoshima,
      "class":"development uiux illustartion",
      "types": "UI/UX | Development | Illustration",
      "title": "Artwork of NAOSHIMA",
    },
      { "id":"reporter",
        "href":".js",
        "image":reporter,
        "class":"illustration uiux",
        "types": "UI/UX | Illustration",
        "title": "I Am a Reporter",
      },
      { "id":"even",
        "href":".js",
        "image":even,
        "class":"uiux",
        "types": "UI/UX",
        "title": "Even",
      },
      { "id":"momo",
        "href":".js",
        "image":momoko,
        "class":"animation",
        "types": "Animation (Emoji Stickers)",
        "title": "Happy Momoko",
      },
      { "id":"gssh",
        "href":".js",
        "image":gssh,
        "class":"video",
        "types": "Video",
        "title": "GSSH - Class of 2011",
      },
     
    ];
  }
  closehandler(){
    setTimeout(this.setState({page:0}), 300);
    
  }
 
  addActive(e){

   let keylist=Object.keys(this.itemlist);
   let exist=0;
    let thisDiv=e.target.id;
    let classlist=e.target.classList;
      if(classlist[1]) { 
          e.target.classList.remove("workactive");
          this.state.deactivelist.push(thisDiv);

          this.state.activelist.splice(this.state.activelist.indexOf(thisDiv),1);
          for (let i=0;i<keylist.length;i++){
            exist=1;
            for(let j=0;j<this.itemlist[keylist[i]].length;j++){
               if(this.state.activelist.includes(this.itemlist[keylist[i]][j])){
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
            if(this.itemlist[keylist[i]].includes(thisDiv)){
              this.props.reopac(keylist[i]);
            }
          };

     }
  }
  worktypebar(){
    let element=[];
    for(let i=0;i<this.typelist.length;i++){
      element.push(
        <div className="worksbutton workactive" key={this.typelist[i]} onClick={this.addActive} id={this.typelist[i]}>{this.typenames[this.typelist[i]]}</div>
      )
    }
    return element;
  }

  projects(){
    
    let element=[];
    for(let i=0;i<this.worklist.length;i++){
      element.push(
        <div id={this.worklist[i].id} className="funwork" key={this.worklist[i].id} onClick = {(ev) => this.setState({page : 4, curid:this.worklist[i].id})}  >
          <div className={"portwrap " + this.worklist[i].class} >
            <img className="longim" alt={this.worklist[i].title} src={this.worklist[i].image} />
            <div className="discrip">
            {this.worklist[i].title}<br />
            <span className="types">
            {this.worklist[i].types}
            </span>
            </div>
          </div>
          <div className="discripsmaller">
          {this.worklist[i].title}<br />
          <span className="types">{this.worklist[i].types}</span>
          </div>
        </div>
      )
    }
    element=<div><div className="worktypes">{this.worktypebar()}</div>{element}</div>;
    return element  
  }
  renderPageView(){
    if(this.state.page === 4){
      return <Projects idnum={this.state.curid} closehandle={this.closehandler.bind(this)}/>
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

export default Fun;
