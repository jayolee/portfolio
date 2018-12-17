import React, { Component } from 'react';
import './App.scss';
import './projects.scss'
import logpos from './images/logpos2.jpg'
import dotenote from './images/dotenote.png'
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
      activelist:['uiux', 'code', 'ideation','illustration','animation','video'],
      deactivelist:[],
    }

  }
  closehandler(){
    setTimeout(this.setState({page:0}), 300);
    
  }
 
  addActive(e){
    let itemlist={
      "reporter":['uiux','illustration'],
      "even":['uiux'],
      "momo":['animation'],
      "gssh":['video'],
      "naoshima":['code','uiux','illustration'],
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
            this.wraphide(keylist[i]);
          }
      }
     } else {
      this.state.activelist.push(thisDiv);
    
      this.state.deactivelist.splice(this.state.deactivelist.indexOf(thisDiv),1);
     
          e.target.classList.add("workactive");
          for(let i=0;i<keylist.length;i++){
            if(itemlist[keylist[i]].includes(thisDiv)){
              this.reopac(keylist[i]);
            }
          };

     }
  }
wraphide(item){
  let tohide=document.getElementById(item).childNodes[0];
  if(tohide){
    tohide.style.opacity=0;
    tohide.style.width=0;
    tohide.style.overflow="hidden";
    document.getElementById(item).style.width=0;
    setTimeout(function() {tohide.style.display='none'; 
    document.getElementById(item).style.display='none'}, 300);
	}
  	

}
reopac(item){

  let toreopac=document.getElementById(item).childNodes[0];
  if(toreopac){
  document.getElementById(item).style.display='inline-block';
  toreopac.style.display="inline-block";
  
  setTimeout(function(){document.getElementById(item).style.width='31%'; toreopac.style.width="100%"; toreopac.style.opacity='1'},10)
}
}
  worktypebar(){
    let element=[];
    let typelist=['uiux', 'code', 'ideation','illustration','animation','video'];
    let typenames={
      'ideation':'Ideation',
      'video':'Video',
      'uiux':'UI/UX',
      'illustration':'Illustration',
      'animation':'Animation',
      'code':'Code',
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
        { "id":"logpos",
        "href":".js",
        "image":logpos,
        "class":"ideation video",
        "types": "Ideation | Video",
        "title": "LOG + POS",
      },
      { "id":"dote",
        "href":".js",
        "image":dotenote,
        "class":"ideation video uiux",
        "types": "UI/UX | Ideation | Video",
        "title": "DoteNote",
      },
    ];
    for(let i=0;i<worklist.length;i++){
        element.push(
          <a id={worklist[i].id} className = "main_work" href="#" onClick = {(ev) => this.setState({page : 4, curid:worklist[i].id})}  >
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
            <span class="types">{worklist[i].types}</span>
            </div>
          </a>
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

export default MainProject;
