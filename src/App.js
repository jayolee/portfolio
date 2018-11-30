import React, { Component } from 'react';
import './App.scss';
import Header from './header.js'

import logo from './images/younglogo.svg'

import logpos from './images/logpos2.jpg'
import dotenote from './images/dotenote.png'
import reporter from './images/lights.jpg'
import even from './images/even2.png'
import momoko from './images/momo.png'
import gssh from './images/gssh.png'
import naoshima from './images/naoshima.png'

class App extends Component {

  constructor(props) {
    super(props);
    this.addActive=this.addActive.bind(this);
    this.state = {
      page: 0,
      curid:null,
      active:true,
      activelist:['uiux', 'code', 'ideation','illustration','animation','video'],
      deactivelist:[],
    }
    
  }

  addActive(e){
    let itemlist={
      "log":['ideation','video'],
      "dote":['uiux','ideation','video'],
      "reporter":['uiux','illustration'],
      "even":['uiux'],
      "momoko":['animation'],
      "gssh":['video'],
      "naoshima":['code','uiux','illustration'],
    }
   let keylist=Object.keys(itemlist);
   let exist=0;
  let thisDiv=e.target.id;
  let classlist=e.target.classList;
      if(classlist[1]) { 

          e.target.classList.remove("workactive");
          this.setState({deactivelist: this.state.deactivelist.push(thisDiv)});
          this.setState({deactivelist: this.state.activelist.splice(this.state.activelist.indexOf(thisDiv),1)});
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
          e.target.classList.add("workactive");
          for(let i=0;i<keylist.length;i++){
            if(itemlist[keylist[i]].includes(thisDiv)){
              //reopaq(keylist[i]);
            }
          };

     }
  }
wraphide(item){
  let tohide=document.getElementById(item).childNodes[0];
    tohide.style.opacity=0;
    //document.getElementById(item).style.width=0;
    tohide.style.width=0;
    tohide.style.height=0;
    tohide.style.transform ='translateX(100%) translateY(-100%)';
    tohide.style.overflow='hidden';
    setTimeout(function() {tohide.style.display='none'; 
    document.getElementById(item).style.display='none'}, 300);
	
  	

}

headertype(){
      return <Header pagenum={this.state.page} />
  }
  stargenerator(){
    let element=[];
    let leftv=0;
    let topv=0;
    let position=0;
    let starstyle={};
    for(let i=0;i<60;i++){
      position=parseInt(Math.random() * 100);
      leftv=position+"%";
      position=parseInt(Math.random() * 100);
      topv=position+"%";
      position=(Math.random());
      starstyle={
        left: leftv,
        bottom:topv,
        opacity:position,
      }
      element.push(<div className="stars" style={starstyle} ></div>)
    }
    return(element);
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
      { "id":"log",
        "href":".js",
        "image":logpos,
        "class":"ideation video",
        "types": "Ideation | Video",
        "title": "LOG+POS",
      },
      { "id":"dote",
        "href":".js",
        "image":dotenote,
        "class":"ideation video uiux",
        "types": "UI/UX | Ideation | Video",
        "title": "DoteNote",
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
      { "id":"momoko",
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
      { "id":"naoshima",
        "href":".js",
        "image":naoshima,
        "class":"code uiux illustartion",
        "types": "UI/UX | Code | Illustration",
        "title": "Artwork of NAOSHIMA",
      },
    ];
    for(let i=0;i<worklist.length;i++){
    element.push(
      <a id={worklist[i].id} href="#">
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
    return element
  }
  


  render() {
    return (
      <div>
      <div className="starwrap_out">
        <div className="starwrap_in">
              {this.stargenerator()}
          </div>
      </div>
         {this.headertype()}
         <div className="sectopwrapper" />
         <div className="works">
          <div className="logobox">
            <div className="logowrap">
              <a href="index.html">
                <img src={logo} id="ylogo" />
              </a>
            </div>
          </div>
        

        <div className="workbox">
          <div className="worktypes">
            {this.worktypebar()}
            
          </div>

              {this.projects()}

        </div>
        </div>
        <div className="cprg">This website is designed and developed by Young.<br />ⓒ 2017. YOUNG</div>

      </div>
    );
  }
}

export default App;
