import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import './App.scss';
import './projects.scss'
import logpos from './images/logpos2.jpg'
import dotenote from './images/dotenote.jpg'
import getcuisine from './images/getcuisine.png'
import up_main from './up/blowmain.jpg'
import naoshima from './images/naoshima.png'
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
        'uiux': ['UI/UX', "worksbutton workactive"],
        'development': ['Development', "worksbutton workactive"]
      },
      worklist: [
        {
          "id": "up",
          "image": up_main,
          "class": "uiux development portwrap",
          "mainClass": "main_work",
          "types": "UI/UX | Development",
          "title": "Up",
        },
        {
          "id": "getcuisine",
          "image": getcuisine,
          "class": "uiux development portwrap",
          "mainClass": "main_work",
          "types": "UI/UX | Development",
          "title": "Get Cuisine",
        },
        {
          "id": "dote",
          "image": dotenote,
          "class": "ideation uiux portwrap",
          "mainClass": "main_work",
          "types": "UI/UX | Ideation",
          "title": "DoteNote",
        },
         {
          "id": "logpos",
          "image": logpos,
          "class": "ideation portwrap",
          "mainClass": "main_work",
          "types": "Ideation",
          "title": "LOG + POS",
        },
        { "id":"naoshima",
        "image":naoshima,
        "class":"development uiux portwrap",
        "mainClass":"main_work",
        "types": "UI/UX | Development",
        "title": "Artwork of NAOSHIMA",
      },
      ],
    }
    this.typelist = ['uiux', 'development', 'ideation'];
  }
  closehandler() {
    setTimeout(this.setState({ page: 0 }), 300);

  }

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
        if(!(classes.includes("hidden"))){classes.pop();
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
        }}
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

  //filter
  worktypebar() {
    let element = [];
    for (let i = 0; i < this.typelist.length; i++) {
      element.push(
        <div className={this.state.typenames[this.typelist[i]][1]} key={this.typelist[i]} onClick={this.addActive} id={this.typelist[i]}>{this.state.typenames[this.typelist[i]][0]}</div>
      )
    }
    return element;
  }

  //create boxes
  projects() {
    let element = [];
    let routelist=[];
    let projectUrl = '';
    for (let i = 0; i < this.state.worklist.length; i++) {
      projectUrl=process.env.PUBLIC_URL +'/project/'+this.state.worklist[i].id+'/';
     element.push(
        <Link to={projectUrl} key={this.state.worklist[i].id+'_link'} >
        <div id={this.state.worklist[i].id} key={this.state.worklist[i].id} className={this.state.worklist[i].mainClass}  >
          <div className={this.state.worklist[i].class} key={this.state.worklist[i].id + "wrapper"}>
            <img className="longim" alt={this.state.worklist[i].title} src={this.state.worklist[i].image} key={this.state.worklist[i].title + "image"} />
            <div className="discrip">
            <div>
              {this.state.worklist[i].title}</div>
              <div className="types">
                {this.state.worklist[i].types}
              </div>
            </div>
          </div>
          <div className="discripsmaller">
            {this.state.worklist[i].title}<br />
            <span className="types">{this.state.worklist[i].types}</span>
          </div>
        </div>
        </Link>
      );
      routelist.push(
        <Route path={projectUrl} key={"routeto_"+this.state.worklist[i].id} render={props => <Projects key="Projects" idnum={this.state.worklist[i].id}  projecttype="/project" />}  />
      )
    }
    element = <div>{routelist}<div className="worktypes">{this.worktypebar()}</div>{element}</div>;
    return element
  }
 
  render() {
    return (
      <div className="workbox">
        {this.projects()}
         </div>
    );
  }
}

export default MainProject;
