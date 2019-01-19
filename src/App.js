import React, { Component } from 'react';
import { Link, Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import './App.scss';
import Header from './header.js'
import Fun from './fun.js'
import logo from './images/younglogo.svg'
import './projects.scss'
import MainProject from './mainProject.js'
import FAs from './FA.js'
import About from './About.js'
import Projects from './projects.js'

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
    }
    this.star_position = this.star_position_generator();
    this.star_twinkle = this.star_twinkle_generator();
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

  //display works
  // renderPageView() {
  //   if (this.state.page === 4) {
  //     return <Projects idnum={this.state.curid} closehandle={this.closehandler.bind(this)} />
  //   };
  // }
  //Function updating current page on state


  projectdisplay = (menunumber, pagenum) => {
    this.setState({ page: (menunumber) * 1, curid: pagenum });
  }

  //Func to close the project detail boxes
  closehandler() {
    setTimeout(this.setState({ page: 0 }), 300);
  }


  //Funcs for stars 
  //function to generate star animation durations
  star_twinkle_generator() {
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
  star_position_generator() {
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
  //function to create stars
  star_generator() {
    let welcommsg = '　　　　　　　∩\n　　　　　　　||\n　　　　　　　||\n　　　　　　　||\n　　　　　 ／￣￣＼\n　　　　　｜　　　 ヽ\n　　　　　/　　　　 |\n　 |＼　／　／ヽ / ノ\n　 |／￣￣￣＼ |/ /\n　 /　　　　　Ｖ＿)\n　｜(● ●)　 ｜\n　王(_人_) 三 /\n　 ＼＿＿＿_／\n　 _/ /_/ /\n　(＿ﾉ(＿ﾉ\n WELCOME!'
    console.log(welcommsg);
    let element = [];

    for (let i = 0; i < this.star_position.length; i++)
      element.push(<div className="star_opac_wrap" key={"starwrap" + i} style={this.star_twinkle[i]}>
        <div className="stars" key={"star" + i} style={this.star_position[i]} />
      </div>)
    return element;
  }

  render() { 
    return (
      <Router>
        <div>
        <div className="starwrap_out">
          <div className="starwrap_in" key="starwrap">
            {this.star_generator()}
          </div>
        </div>
        <Header key="header" pagenum={this.state.menu} menustatus={this.menustatus} />
        <div className="sectopwrapper" />
        <div className="works">
        
          <div className="logobox">
            <div className="logowrap">
              <a href="/" >
                <img src={logo} id="ylogo" alt="logo" onClick={(ev)=> this.setState({menu:0})}/>
                </a>
            </div>
          </div>
          <Switch>
          <Route path="/project/" component={MainProject} />
          <Route path="/fun/" component={Fun} />
          <Route path="/fineart/" component={FAs} />
          <Route path="/about/" component={About} />
          <Redirect to="/project/"  />
          </Switch>
          </div>
        
        <div className="cprg">This website is designed and developed by Young.<br />ⓒ 2018. YOUNG</div>
        </div>
        </Router> 
    );
  }
}

export default App;
