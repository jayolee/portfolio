import React, { Component } from 'react';
import './App.scss';
import Header from './header.js'
import Projects from './projects.js'
import Fun from './fun.js'
import logo from './images/younglogo.svg'
import './projects.scss'
import MainProject from './mainProject.js'
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

  //display works
  renderPageView(){
    if(this.state.page === 4){
      return <Projects idnum={this.state.curid} closehandle={this.closehandler.bind(this)}/>
    };
  }
  //Function will be sent as props for header
  menustatus = (menunumber) => {
    this.setState({page: (menunumber)*1});
  }

  projectdisplay = (menunumber, pagenum) => {
    this.setState({page: (menunumber)*1, curid: pagenum});
  }

  //Func to close the project detail boxes
  closehandler(){
    setTimeout(this.setState({page:0}), 300); 
  }

  //Func for filter 
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

  //Func to hide projects 
  wraphide(item){
    let tohide=document.getElementById(item).childNodes[0];
    if(tohide){
      tohide.classList.add("hidden");
      document.getElementById(item).classList.add("hidden");
      setTimeout(function() {tohide.classList.add("displayNone"); 
      document.getElementById(item).classList.add("displayNone")}, 300);
    }
      
  
  }
  reopac(item){
    let toreopac=document.getElementById(item).childNodes[0];
    if(toreopac){
    document.getElementById(item).classList.remove("displayNone");
    toreopac.classList.remove("displayNone");
    setTimeout(function(){
      document.getElementById(item).classList.remove("hidden"); 
      toreopac.classList.remove("hidden")},10)
  }
  }

//Create header navbar
headertype(){
      return <Header key="header" pagenum={this.state.menu} menustatus={this.menustatus} />
  }

//Funcs for stars 
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
    <div className="stars" key={"star"+i} style={this.star_position[i]} />
    </div>)
    return element;
  }

  //Func for filter bar 
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
        <div className="worksbutton workactive" key={typenames[typelist[i]]} onClick={this.addActive} id={typelist[i]}>{typenames[typelist[i]]}</div>
      )
    }
    return element;
  }

  //Main project section
  projects(){
    if(this.state.page === 0){
      return <MainProject key="mainProject" closehandle={this.closehandler.bind(this)} projectdisplay={this.projectdisplay} wraphide={this.wraphide} reopac={this.reopac}/>
    }
    if(this.state.page === 1){
      return <Fun key="fun" closehandle={this.closehandler.bind(this)} projectdisplay={this.projectdisplay} wraphide={this.wraphide} reopac={this.reopac}/>
    }
    if(this.state.page === 2){
      return <FAs key="FAs" closehandle={this.closehandler.bind(this)}/>
    }
    if(this.state.page === 3){
      return <About key="about" closehandle={this.closehandler.bind(this)}/>
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

              {this.projects()}
        </div>
        <div className="cprg">This website is designed and developed by Young.<br />ⓒ 2018. YOUNG</div>
       
      </div>
    );
  }
}

export default App;
