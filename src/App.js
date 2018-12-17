import React, { Component } from 'react';
import './App.scss';
import Header from './header.js'
import Projects from './projects.js'
import Workings from './working.js'
import logo from './images/younglogo.svg'
import './projects.scss'
import logpos from './images/logpos2.jpg'
import dotenote from './images/dotenote.png'
import reporter from './images/lights.jpg'
import even from './images/even2.png'
import momoko from './images/momo.png'
import gssh from './images/gssh.png'
import naoshima from './images/naoshima.png'
import FAs from './FA.js'
import About from './About.js'

class App extends Component {

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
    this.star_position=this.star_position_generator();
    this.star_twinkle=this.star_twinkle_generator();
  }
  renderPageView(){
    if(this.state.page === 3){
      return <Projects idnum={this.state.curid} closehandle={this.closehandler.bind(this)}/>
    }
    
  }
  menustatus = (menunumber) => {
    this.setState({page: (menunumber)*1});

  }
  closehandler(){
    setTimeout(this.setState({page:0}), 300);
    
  }
 
  addActive(e){
    let itemlist={
      "logpos":['ideation','video'],
      "dote":['uiux','ideation','video'],
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

headertype(){
      return <Header pagenum={this.state.menu} menustatus={this.menustatus} />
  }
star_twinkle_generator(){
  let duration=[];
  let starstyle={};
  let temp_duration=0;
  for(let i=0;i<80;i++){
    temp_duration=Math.random();
    if(temp_duration<.4){
      temp_duration += .4;
    }
    starstyle={animationDuration: temp_duration+'s'};
    duration.push(starstyle);
  }
  return duration;
}
  star_position_generator(){
    let element=[];
    let leftv=0;
    let topv=0;
    let position=0;
    let starstyle={};
    for(let i=0;i<80;i++){
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
      element.push(starstyle)
    }
    return(element);
  }
  star_generator(){
    let element=[];

    for(let i=0; i<this.star_position.length;i++)
    element.push(<div className="star_opac_wrap" style={this.star_twinkle[i]}>
    <div className="stars" style={this.star_position[i]} />
    </div>)
    return element;
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
    if(this.state.page === 1){
      return <FAs closehandle={this.closehandler.bind(this)}/>
    }
    if(this.state.page === 2){
      return <About closehandle={this.closehandler.bind(this)}/>
    }
    else{
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
      <a id={worklist[i].id} href="#" onClick = {(ev) => this.setState({page : 3, curid:worklist[i].id})}  >
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
    
  }
  


  render() {
    return (
      <div>
      <div className="starwrap_out">
        <div className="starwrap_in">     
              {this.star_generator()}
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
          

              {this.projects()}

        </div>
        </div>
        <div className="cprg">This website is designed and developed by Young.<br />ⓒ 2018. YOUNG</div>
        {this.renderPageView()}
      </div>
    );
  }
}

export default App;
