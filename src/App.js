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
    this.typelist=['uiux', 'code', 'ideation','illustration','animation','video'];
    this.typenames={
      'ideation':'Ideation',
      'video':'Video',
      'uiux':'UI/UX',
      'illustration':'Illustration',
      'animation':'Animation',
      'code':'Code',
    }
  }

  //display works
  renderPageView(){
    if(this.state.page === 4){
      return <Projects idnum={this.state.curid} closehandle={this.closehandler.bind(this)}/>
    };
  }
  //Function updating current page on state
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


//Funcs for stars 
//function to generate star animation durations
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

//function to randomly generate star positions
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
  //function to create stars
  star_generator(){
    let welcommsg='　　　　　　　∩\n　　　　　　　||\n　　　　　　　||\n　　　　　　　||\n　　　　　 ／￣￣＼\n　　　　　｜　　　 ヽ\n　　　　　/　　　　 |\n　 |＼　／　／ヽ / ノ\n　 |／￣￣￣＼ |/ /\n　 /　　　　　Ｖ＿)\n　｜(● ●)　 ｜\n　王(_人_) 三 /\n　 ＼＿＿＿_／\n　 _/ /_/ /\n　(＿ﾉ(＿ﾉ\n WELCOME!'
    console.log(welcommsg);
    let element=[];

    for(let i=0; i<this.star_position.length;i++)
    element.push(<div className="star_opac_wrap" key={"starwrap"+i} style={this.star_twinkle[i]}>
    <div className="stars" key={"star"+i} style={this.star_position[i]} />
    </div>)
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
        <div className="starwrap_in" key="starwrap">     
              {this.star_generator()}
          </div>
      </div>
      <Header key="header" pagenum={this.state.menu} menustatus={this.menustatus}/>
         <div className="sectopwrapper" />
         <div className="works">
          <div className="logobox">
            <div className="logowrap">
              <a href="index.html">
                <img src={logo} id="ylogo" alt="logo" />
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
