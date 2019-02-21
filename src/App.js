import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import './App.scss';
import Header from './header.js'
import Fun from './fun.js'
import logo from './images/younglogo.svg'
import text from './images/404text.svg'
import './projects.scss'
import MainProject from './mainProject.js'
import FAs from './FA.js'
import About from './About.js'
import Page404 from './page404.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menu: 0,
      page: 0,
      curid: null,
      active: true,
      activelist: ['uiux', 'code', 'ideation', 'illustration', 'animation', 'video'],
      deactivelist: [],
      star_opacity: 1,
    }
    this.star_position = this.starPosGenerator();
    this.star_twinkle = this.starTwinkleGenerator();
    this.logoList=[logo, text];
    this.logoStyle=[{}, {width:"90%"}];
    this.logoWrapStyle=[{}, {height:"171px"}];
    this.typelist = ['uiux', 'code', 'ideation', 'illustration', 'animation', 'video'];
    this.typenames = {
      'ideation': 'Ideation',
      'video': 'Video',
      'uiux': 'UI/UX',
      'illustration': 'Illustration',
      'animation': 'Animation',
      'code': 'Code',
    }
  }

  updateLogo = (i) => {
      this.setState({ page: i});
    
  }

  //Funcs for stars 
  //function to generate star animation durations
  starTwinkleGenerator() {
    let duration = [];
    let starstyle = {};
    let temp_duration = 0;
    for (let i = 0; i < 80; i++) {
      temp_duration = Math.random();
      if (temp_duration < .4) {
        temp_duration += .4;
      }
      starstyle = { animationDuration: temp_duration + 's' };
      duration.push(starstyle);
    }
    return duration;
  }

  //function to randomly generate star positions
  starPosGenerator() {
    let element = [];
    let leftv = 0;
    let topv = 0;
    let position = 0;
    let starstyle = {};
    for (let i = 0; i < 80; i++) {
      position = parseInt(Math.random() * 100);
      leftv = position + "%";
      position = parseInt(Math.random() * 100);
      topv = position + "%";
      position = (Math.random());
      starstyle = {
        left: leftv,
        bottom: topv,
        opacity: position,
      }
      element.push(starstyle)
    }
    return (element);
  }
  //functions to change star opacity
  starOff(){
    this.setState({star_opacity: 0});
  }
  starOn(){
    this.setState({star_opacity: 1});
  }
  //function to create stars
  starGenerator() {
    let welcommsg = '　　　　　　　∩\n　　　　　　　||\n　　　　　　　||\n　　　　　　　||\n　　　　　 ／￣￣＼\n　　　　　｜　　　 ヽ\n　　　　　/　　　　 |\n　 |＼　／　／ヽ / ノ\n　 |／￣￣￣＼ |/ /\n　 /　　　　　Ｖ＿)\n　｜(● ●)　 ｜\n　王(_人_) 三 /\n　 ＼＿＿＿_／\n　 _/ /_/ /\n　(＿ﾉ(＿ﾉ\n WELCOME!'
    console.log(welcommsg); //welcome message printing
    let element = [];

    for (let i = 0; i < this.star_position.length; i++){
      element.push(
      <div className="star_opac_wrap" key={"starwrap" + i} style={this.star_twinkle[i]}>
        <div className="stars" key={"star" + i} style={this.star_position[i]} />
      </div>
      )
    }
    return element;
  }

  render() { 
    return (
      <Router>
        <div>
        <div className="starwrap_out">
          <div className="starwrap_in" key="starwrap">
          <div style={{opacity:this.state.star_opacity, transition:".4s"}} key={"staropacity"}>
            {this.starGenerator()}
            </div>
          </div>
        </div>
        <Header key="header" pagenum={this.state.menu} menustatus={this.menustatus} />
        <div className = "header">
        <div className="logowrap header" key="toplogo" style={{opacity:(this.state.star_opacity - 1) * -0.8}}>
              <a href={process.env.PUBLIC_URL +"/projects"} >
                <img src={this.logoList[this.state.page]} id="ylogo" alt="logo" style={this.logoStyle[this.state.page]} onClick={(ev)=> this.setState({menu:0})}/>
                </a> 
            </div>
            </div>
        <div className="sectopwrapper" />
        <div className="works">
        
          <div className="logobox">
            <div className="logowrap" style={this.logoWrapStyle[this.state.page]}>
              <a href={process.env.PUBLIC_URL +"/projects"} >
                <img src={this.logoList[this.state.page]} id="ylogo" alt="logo" style={this.logoStyle[this.state.page]} onClick={(ev)=> this.setState({menu:0})}/>
                </a>
               
            </div>
            <div class="titles">Designer | Developer</div>
          </div>
          <Switch>
          <Route path={process.env.PUBLIC_URL} exact render = {props => <MainProject starOff={this.starOff.bind(this)} starOn = {this.starOn.bind(this)} />} />
          <Route path={process.env.PUBLIC_URL + "/projects/"} render = {props => <MainProject starOff={this.starOff.bind(this)} starOn = {this.starOn.bind(this)} />} />
          <Route path={process.env.PUBLIC_URL +"/more/"} render = {props => <Fun starOff={this.starOff.bind(this)} starOn = {this.starOn.bind(this)} />} />
          <Route path={process.env.PUBLIC_URL +"/fineart/"} component={FAs} />
          <Route path={process.env.PUBLIC_URL +"/about/"} component={About} />
          <Route path={process.env.PUBLIC_URL +"/404/"} render={props => <Page404  updateLogo={this.updateLogo.bind(this)}/>} />
          <Redirect to={process.env.PUBLIC_URL +"/404/" }/>
          </Switch>
          </div>
        
        <div className="cprg">This website is designed and developed by Young.<br />ⓒ 2019. YOUNG</div>
        </div>
        </Router> 
    );
  }
}

export default App;
