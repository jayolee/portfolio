import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import './App.scss';
import './projects.scss'

import forkie from './topImage/forkie.png'
import getcuisine from './topImage/getcuisine.png'
import up_main from './topImage/up.png'

import reporter from './topImage/reporter.jpg'
import logpos from './images/logpos2.jpg'
import iml from './topImage/iml.jpg'
import momoko from './topImage/momoko.jpg'
import dotenote from './images/dotenote.jpg'
import naoshima from './topImage/naoshima.jpg'
import lock from './topImage/lock.png'
import herecare from './topImage/herecare.png'
import bc from './topImage/bc.png'
import bcr from './topImage/bcr.png'

import fa from './FA/images/image2-4.jpg'
import Projects from './projects.js'

class MainProject extends Component {

  constructor(props) {
    super(props);
    this.addActive = this.addActive.bind(this);
    this.state = {
      menu: 0,
      page: 0,
      curid: null,
      active: true,
      activelist: ['uiux', 'development', 'ideation'],
      typenames: {
        'ideation': ['Ideation', "worksbutton workactive"],
        'uiux': ['UI', "worksbutton workactive"],
        'development': ['Development', "worksbutton workactive"]
      },
      worklist: [
        {
          "id": "bcr",
          "image": bcr,
          "class": "portwrap",
          "mainClass": "main_work",
          "expla": "Service for recovering PTSD veterans and first responders",
          "title": "Boulder Crest",
        },{
          "id": "herecare",
          "image": herecare,
          "class": "uiux development portwrap",
          "mainClass": "main_work",
          "expla": "An Alexa solution assists at-home rehabilitation speech practices for neurodegenerative disease patients",
          "title": "HereCare",
        }, {
          "id": "up",
          "image": up_main,
          "class": "uiux development portwrap",
          "mainClass": "main_work",
          "expla": "A mobile app that promotes productivity and combat stress",
          "title": "Up",
        },{
        "id": "forkie",
        "image": forkie,
        "class": "uiux development portwrap",
        "mainClass": "main_work",
        "expla": "A mobile app help people regain passion for cooking",
        "title": "Forkie",
      }, 
      {
        "id": "buncee",
        "image": bc,
        "class": "ideation portwrap",
        "mainClass": "main_work",
        "expla": "A tool for fostering creativity in school communities (www.buncee.com)",
        "title": "Buncee",
      },
      {
        "id": "iml",
        "image": iml,
        "class": "development uiux portwrap",
        "mainClass": "main_work",
        "types": "UI/UX | Development",
        "expla": "A web-based game collecting the data of ML interpretability",
        "title": "ML Interpretability (Ongoing)",
      },
      
      ],
      sideWork: [
        {
          "id": "logpos",
          "image": logpos,
          "class": "animation portwrap",
          "mainClass": "funwork",
          "types": "UX",
          "expla": "An audio AR solution improving rescue operations",
          "title": "LOG + POS",
        },

        {
          "id": "dote",
          "image": dotenote,
          "class": "ideation uiux portwrap",
          "mainClass": "funwork",
          "types": "UI/UX | Ideation",
          "expla": "Location specific virtual messaging mobile application",
          "title": "DoteNote",
        },
        {
          "id": "getcuisine",
          "image": getcuisine,
          "class": "uiux development portwrap",
          "mainClass": "funwork",
          "expla": "A ML powered website to help clean out the fridge",
          "title": "Get Cuisine",
        },
        {
          "id": "naoshima",
          "image": naoshima,
          "class": "development uiux portwrap",
          "mainClass": "funwork",
          "types": "UI/UX | Development",
          "expla": "A website about Naoshima, Japan",
          "title": "Artwork of NAOSHIMA",
        },
        {
          "id": "momo",
          "image": momoko,
          "class": "animation portwrap",
          "mainClass": "funwork",
          "types": "Animation (Emoji Stickers)",
          "expla": "Animation Emoji Stickers",
          "title": "Happy Momoko",
        },
        {
          "id": "reporter",
          "image": reporter,
          "class": "illustration uiux portwrap",
          "mainClass": "funwork",
          "types": "UI/UX | Illustration",
          "expla": "A visual novel game for novice users",
          "title": "I Am a Reporter",
        },

      ]
    }
  }
  closehandler() {
    setTimeout(this.setState({ page: 0 }), 300);
  }
  starOff() {
    this.props.starOff();
  }
  starOn() {
    this.props.starOn();
  }
  //filter function  
  addActive(e) {
    let exist = 0;
    let thisDiv = e.target.id;
    let typenames = this.state.typenames;
    let worklist = this.state.worklist;
    let classes = [];
    //if the filter is already active
    if (typenames[thisDiv][1] === "worksbutton workactive") {
      //get rid of Active class  
      typenames[thisDiv][1] = "worksbutton";
      //remove from the activelist
      this.state.activelist.splice(this.state.activelist.indexOf(thisDiv), 1);

      //hide the boxes
      for (let i = 0; i < worklist.length; i++) {
        //create an array of class lists(types of works)
        classes = worklist[i].class.split(' ');
        if (!(classes.includes("hidden"))) {
          classes.pop();
          exist = 1;
          for (let j = 0; j < classes.length; j++) {
            if (this.state.activelist.includes(classes[j])) {
              exist = 0;
              break;
            }
          }
          //if any of classes are not in activelist
          if (exist) {
            worklist[i].class += " hidden"
            worklist[i].mainClass += " hidden"
          }
        }
      }
    } else {
      //add the type to the activelist 
      this.state.activelist.push(thisDiv);
      typenames[thisDiv][1] = "worksbutton workactive";

      for (let i = 0; i < worklist.length; i++) {
        classes = worklist[i].class.split(' ');
        //if it's hidden div and includes new active type
        if (classes.includes("hidden") && classes.includes(thisDiv)) {
          classes.pop(); // get rid of "hidden" from the class
          worklist[i].class = classes.join(' ');
          worklist[i].mainClass = "main_work"
        }
      };

    }
    this.setState({ typenames: typenames, worklist: worklist });
  }

  // //filter
  // worktypebar() {
  //   let element = [];
  //   for (let i = 0; i < this.typelist.length; i++) {
  //     element.push(
  //       <div className={this.state.typenames[this.typelist[i]][1]} key={this.typelist[i]} onClick={this.addActive} id={this.typelist[i]}>{this.state.typenames[this.typelist[i]][0]}</div>
  //     )
  //   }
  //   return element;
  // }

  //create boxes
  projects() {

    let element = [];
    let routelist = [];
    let projectUrl = '';
    for (let i = 0; i < this.state.worklist.length; i++) {
      projectUrl = process.env.PUBLIC_URL + '/projects/' + this.state.worklist[i].id + '/';

      if (this.state.worklist[i].id === "iml") {
        element.push(
         <div id={this.state.worklist[i].id} key={this.state.worklist[i].id} className={this.state.worklist[i].mainClass}  >
            <div className={this.state.worklist[i].class} key={this.state.worklist[i].id + "wrapper"}>
              <img className="longim" alt={this.state.worklist[i].title} src={this.state.worklist[i].image} key={this.state.worklist[i].title + "image"} />
              <div className="discrip">
                <div>
                  {this.state.worklist[i].title}  <img src={lock} id="lock" style={{width: "150px"}} alt = "locked"/></div>
                <div className="expla">
                  {this.state.worklist[i].expla}
                </div>
              </div>
            </div>
            <div className="discripsmaller">
              {this.state.worklist[i].title}<br />
              <span className="types"> {this.state.worklist[i].expla}</span>
            </div>
          </div>
        )
      } else{
      element.push(
        <Link to={projectUrl} key={this.state.worklist[i].id + '_link'} >
          <div id={this.state.worklist[i].id} key={this.state.worklist[i].id} className={this.state.worklist[i].mainClass}  >
            <div className={this.state.worklist[i].class} key={this.state.worklist[i].id + "wrapper"}>
              <img className="longim" alt={this.state.worklist[i].title} src={this.state.worklist[i].image} key={this.state.worklist[i].title + "image"} />
              <div className="discrip">
                <div>
                  {this.state.worklist[i].title}</div>
                <div className="expla">
                  {this.state.worklist[i].expla}
                </div>
              </div>
            </div>
            <div className="discripsmaller">
              {this.state.worklist[i].title}<br />
              <span className="types"> {this.state.worklist[i].expla}</span>
            </div>
          </div>
        </Link>
      );
    }
    }
    
    element = [<div key="routes" style={{ textAlign: "left" }}>{routelist}</div>, <div key="routelist" style={{ maxWidth: "1200px", margin: "0 auto" }}>{element}</div>];
    return element
  }
  sideProjects() {
    let element = [];
    let routelist = [];
    let projectUrl = '';
    for (let i = 0; i < this.state.sideWork.length; i++) {
      projectUrl = process.env.PUBLIC_URL + '/projects/' + this.state.sideWork[i].id + '/';

        element.push(
          <Link to={projectUrl} key={this.state.sideWork[i].id + '_link'} >
            <div id={this.state.sideWork[i].id} key={this.state.sideWork[i].id} className={this.state.sideWork[i].mainClass} onClick={(ev) => this.setState({ page: 4, curid: this.state.sideWork[i].id })}  >
              <div className={this.state.sideWork[i].class} key={this.state.sideWork[i].id + "wrapper"}>
                <img className="longim" alt={this.state.sideWork[i].title} src={this.state.sideWork[i].image} key={this.state.sideWork[i].title + "image"} />
                <div className="discrip">
                  {this.state.sideWork[i].title}
                  <div className="expla fun">
                    {this.state.sideWork[i].expla}
                  </div>
                </div>
              </div>
              <div className="discripsmaller">
                {this.state.sideWork[i].title}<br />
                <span className="types"> {this.state.sideWork[i].expla}</span>
              </div>
            </div>
          </Link>
        )
    }

    element = [<div style={{ textAlign: "left" }} key ="routelist">{routelist}</div>, <div key="routeContent" style={{ maxWidth: "1160px", margin: "0 auto" }}>{element}</div>];
    return element
  }
  routelist() {
    let element = [];
    for (let i = 0; i < this.state.worklist.length - 1; i++) {
      let projectUrl = process.env.PUBLIC_URL + '/projects/' + this.state.worklist[i].id + '/';
      element.push(<Route path={projectUrl} key={"routeto_" + this.state.worklist[i].id} render={props => <Projects key="Projects" idnum={this.state.worklist[i].id} projecttype="/projects"  category = "mainwork" starOff={this.starOff.bind(this)} starOn={this.starOn.bind(this)} />} />)
    }
    for (let i = 0; i < this.state.sideWork.length; i++) {
      let projectUrl = process.env.PUBLIC_URL + '/projects/' + this.state.sideWork[i].id + '/';
      element.push(<Route path={projectUrl} key={"routeto_" + this.state.sideWork[i].id} render={props => <Projects key="Projects" idnum={this.state.sideWork[i].id} projecttype="/projects" category = "sidework" starOff={this.starOff.bind(this)} starOn={this.starOn.bind(this)} />} />)
    }
    return element;
  }
  render() {
    return (
      <div className="workbox">
       {this.routelist()}
        {this.projects()}
        <div style={{width:"100%", maxWidth:"1200px", margin: "150px auto 60px", textAlign: "center", fontSize:"24px", fontWeight:"700", color:"#001a49", lineHeight: "1.8"}} >
        I also have some cool <span style = {{color: "rgb(11, 111, 245)"}}>side projects</span>—feel free to check them out!
        </div>
        {this.sideProjects()}

        <div className="mainfaWrap">
          <div className="mainfa">
            <img src={fa} alt="Fine Art" />
          </div>
          <div className="mainfades" style={{ fontSize: "22px", fontWeight: "bold", color: "rgb(0, 26, 73)" }}>
            Do you like <span style = {{color: "rgb(11, 111, 245)"}}>fine art?</span>
            <br />Check out my fine artwork.<br />

            <a href="https://jayolee.github.io/portfolio/fineart" rel="noopener noreferrer">
              <div className="button blue" style={{ background: "#0b6ff5", lineHeight: "1.5" }}>View More Fine Arts</div>
            </a>
          </div>

        </div>
      </div>
    );
  }
}

export default MainProject;
