import React, { Component } from 'react';
import './App.scss';
import Header from './header.js'
import Projects from './projects.js'
import logo from './images/younglogo.svg'
import './projects.scss'
import reporter from './images/lights.jpg'
import even from './images/even2.png'
import momoko from './images/momo.png'
import gssh from './images/gssh.png'
import naoshima from './images/naoshima.png'
import FAs from './FA.js'
import About from './About.js'

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

  }
  closehandler(){
    setTimeout(this.setState({page:0}), 300);
    
  }
 
  addActive(e){
    let itemlist={
      "naoshima":['code','uiux','illustration'],
      "reporter":['uiux','illustration'],
      "even":['uiux'],
      "momo":['animation'],
      "gssh":['video'],
      
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
  worktypebar(){
    let element=[];
    let typelist=['uiux', 'development', 'ideation','illustration','animation','video'];
    let typenames={
      'ideation':'Ideation',
      'video':'Video',
      'uiux':'UI/UX',
      'illustration':'Illustration',
      'animation':'Animation',
      'development':'development',
    }
    for(let i=0;i<typelist.length;i++){
      element.push(
        <div className="worksbutton workactive" onClick={this.addActive} id={typelist[i]}>{typenames[typelist[i]]}</div>
      )
    }
    return element;
  }

  projects(){
    
    let element=[];
    let worklist=[
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
    for(let i=0;i<worklist.length;i++){
      element.push(
        <div id={worklist[i].id} className="funwork" key={worklist[i].id} onClick = {(ev) => this.setState({page : 4, curid:worklist[i].id})}  >
          <div className={"portwrap " + worklist[i].class} >
            <img className="longim" src={worklist[i].image} />
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
