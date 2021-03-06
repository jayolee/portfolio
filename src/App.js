import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import './App.scss';
import Header from './header.js'
import Fun from './fun.js'
import logo from './images/logo3.png'
import text from './images/404text.svg'
import './projects.scss'
import MainProject from './mainProject.js'
import FAs from './FA.js'
import About from './About.js'
import Page404 from './page404.js'
import Toptitle from './toptitle.js'

import solar1 from './images/solar/mercury.png'
import solar2 from './images/solar/venus.png'
import solar3 from './images/solar/mars.png'
import solar4 from './images/solar/jupyter.png'
import solar5 from './images/solar/saturn.png'
import solar6 from './images/solar/out1.png'
import solar7 from './images/solar/out2.png'

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
      solar: 1,
    }
    this.solarRef = React.createRef();
    this.parallaxInst = '';
    this.logoList = [logo, text];
    this.logoStyle = [{}, { width: "90%" }];
    this.logoWrapStyle = [{}, { height: "171px" }];
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
    this.setState({ page: i });
  }

  //Funcs for stars 
  starOff() {
    if(this.parallaxInst){
    this.parallaxInst.disable();
    // this.setState({ star_opacity: 0 });
  }
  }
  starOn() {
    if(this.parallaxInst){
    this.parallaxInst.enable();
    }
    // this.setState({ star_opacity: 1 });
  }
  //function to create stars
  starGenerator() {
    let element = [];
    element.push(
      <div className="solarwrap" key="solar0" data-depth="0.1" style={{ width: "100%", height: "500px", position: "relative", left: "0", }}>
        <img src={solar1} className={"solar0"} alt = "mercury"/>
        <div className={"shadow solar0"} />
      </div>
    )
    element.push(
      <div className="solarwrap" key="solar1" data-depth="0.3" style={{ width: "100%", height: "500px", position: "relative", left: "0", }}>
        <img src={solar2} className={"solar1"} alt = "Venus" />
        <div className={"shadow solar1"} />
      </div>
    )
    element.push(
      <div className="solarwrap" key="solar2" data-depth="0.2" style={{ width: "100%", height: "500px", position: "relative", left: "0", }}>
        <img src={solar3} className={"solar2"} alt = "mars" />
        <div className={"shadow solar2"} />
      </div>
    )
    element.push(
      <div className="solarwrap" key="solar3" data-depth="0.5" style={{ width: "100%", height: "500px", position: "relative", left: "0", }}>
        <img src={solar6} className={"solar3"} alt = "Uranus" />
        <div className={"shadow solar3"} />

        <img src={solar7} className={"solar4"} alt = "neptune" />
        <div className={"shadow solar4"} />
      </div>
    )
    element.push(
      <div className="solarwrap" key="solar4" data-depth="1" style={{ width: "100%", height: "500px", position: "relative", left: "0", }}>
        <img src={solar4} className={"solar5"} alt = "jupyter" />
        <div className={"shadow solar5"} />

        <img src={solar5} className={"solar6"} alt = "saturn" />
        <div className={"shadow solar6"} />
      </div>
    )
    return element;
  }
  componentDidMount() {
    const welcommsg = '　　　　　　　∩\n　　　　　　　||\n　　　　　　　||\n　　　　　　　||\n　　　　　 ／￣￣＼\n　　　　　｜　　　 ヽ\n　　　　　/　　　　 |\n　 |＼　／　／ヽ / ノ\n　 |／￣￣￣＼ |/ /\n　 /　　　　　Ｖ＿)\n　｜(● ●)　 ｜\n　王(_人_) 三 /\n　 ＼＿＿＿_／\n　 _/ /_/ /\n　(＿ﾉ(＿ﾉ\n WELCOME!'
    console.log(welcommsg); //welcome message printing
   
    const scene = this.solarRef.current;
    const Parallax = window.Parallax;
    const parallaxInstance = new Parallax(scene, { hoverOnly: true });
    this.parallaxInst = parallaxInstance;
  }

  render() {
    return (
      <Router>
        <div>
          <div className="starwrap_out">
            <div className="starwrap_in" key="starwrap">
              <div id="solarsystem" ref = {this.solarRef}>
                {this.starGenerator()}
              </div>
              <div className="logobox">
                <Toptitle />
              </div>


            </div>
          </div>
          <Header key="header" pagenum={this.state.menu} menustatus={this.menustatus}/>
          <div className="header">
            <div className="logowrap header" key="toplogo" style={{ opacity: (this.state.star_opacity - 1) * -0.8 }}>
              <a href={process.env.PUBLIC_URL + "/projects"} >
                <img src={this.logoList[this.state.page]} id="ylogo" alt="logo" style={this.logoStyle[this.state.page]} onClick={(ev) => this.setState({ menu: 0 })} />
              </a>
            </div>
          </div>
          <div className="sectopwrapper" />
          <div className="works">


            <Switch>
            {/* <Route path={process.env.PUBLIC_URL} exact component={FAs} /> */}
            {/* <Route path={process.env.PUBLIC_URL} exact component={About} /> */}
              <Route path={process.env.PUBLIC_URL} exact render={props => <MainProject starOff={this.starOff.bind(this)} starOn={this.starOn.bind(this)} key = "mainProject"/>} />
              <Route path={process.env.PUBLIC_URL + "/projects/"} render={props => <MainProject starOff={this.starOff.bind(this)} starOn={this.starOn.bind(this)}  key = "mainProject"/>} />
              <Route path={process.env.PUBLIC_URL + "/more/"} render={props => <Fun starOff={this.starOff.bind(this)} starOn={this.starOn.bind(this)}  key = "sideProject"/>} />
              <Route path={process.env.PUBLIC_URL + "/fineart/"} component={FAs} />
              <Route path={process.env.PUBLIC_URL + "/about/"} component={About} />
              <Route path={process.env.PUBLIC_URL + "/404/"} render={props => <Page404 updateLogo={this.updateLogo.bind(this)}  key = "page404"/>} />
              <Redirect to={process.env.PUBLIC_URL + "/404/"} />
            </Switch>
          </div>

          <div className="cprg">This website is designed and developed by Young.<br />ⓒ 2019. YOUNG</div>
        </div>
      </Router>
    );
  }
}

export default App;
