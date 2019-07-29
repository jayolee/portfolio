import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import './App.scss';
import Projects from './projects.js'
import './projects.scss'

import reporter from './images/lights.jpg'
import logpos from './images/logpos2.jpg'
import even from './images/even2.png'
import momoko from './images/momo.png'
import gssh from './images/gssh.jpg'

import dotenote from './images/dotenote.jpg'
import naoshima from './images/naoshima.jpg'



class Fun extends Component {

  constructor(props) {
    super(props);
    this.addActive=this.addActive.bind(this);
    this.state = {
      menu:0,
      page: 0,
      curid:null,
      active:true,
      activelist:['uiux', 'development', 'illustration','animation','video'],
      typenames:{
        'video':['Video', "worksbutton workactive"],
        'uiux':['UI/UX', "worksbutton workactive"],
        'illustration':['Illustration', "worksbutton workactive"],
        'animation':['Animation', "worksbutton workactive"],
        'development':['Development', "worksbutton workactive"]
      }
    }
    this.typelist=['uiux', 'development', 'illustration','animation','video'];
  }
  closehandler(){
    setTimeout(this.setState({page:0}), 300);
    
  }
  starOff(){
    this.props.starOff();
  }
  starOn(){
    this.props.starOn();
  }
  addActive(e){
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
          worklist[i].mainClass = "funwork"
        }
      };
     
    }
    this.setState({ typenames: typenames, worklist: worklist });
  }

  projects(){
    let element = [];
    let routelist=[];
    let projectUrl = '';
    for (let i = 0; i < this.state.worklist.length; i++) {
      projectUrl=process.env.PUBLIC_URL +'/more/'+this.state.worklist[i].id+'/';
      element.push(
        <Link to={projectUrl} key={this.state.worklist[i].id+'_link'} >
        <div id={this.state.worklist[i].id} key={this.state.worklist[i].id} className={this.state.worklist[i].mainClass} onClick={(ev) => this.setState({ page: 4, curid: this.state.worklist[i].id })}  >
          <div className={this.state.worklist[i].class} key={this.state.worklist[i].id + "wrapper"}>
            <img className="longim" alt={this.state.worklist[i].title} src={this.state.worklist[i].image} key={this.state.worklist[i].title + "image"} />
            <div className="discrip">
              {this.state.worklist[i].title}
              <div className="expla fun">
                {this.state.worklist[i].expla}
              </div>
            </div>
          </div>
          <div className="discripsmaller">
            {this.state.worklist[i].title}<br />
            <span className="types">{this.state.worklist[i].types}</span>
          </div>
        </div>
        </Link>
      )
      routelist.push(
        <Route path={projectUrl} key={"routeto_"+this.state.worklist[i].id} render={props => <Projects key="Projects" idnum={this.state.worklist[i].id} projecttype="/more" starOff={this.starOff.bind(this)} starOn = {this.starOn.bind(this)} />} />
      )
    }
    element = [<div style={{textAlign: "left"}}>{routelist}</div>, <div style={{maxWidth: "1200px", margin: "0 auto"}}>{element}</div>];
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

export default Fun;
