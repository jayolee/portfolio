import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import './App.scss';
import './projects.scss'

import dotenote from './images/dotenote.jpg'
import getcuisine from './images/getcuisine.jpg'
import up_main from './up/blowmain.jpg'

import buncee_logo from './images/buncee.jpg'

import nao from './images/nao_main.jpg'
import report from './images/report_main.jpg'
import momo from './images/momo_main.jpg'
import log from './images/log_main.jpg'

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
      worklist: [{
        "id": "forkie",
        "image": getcuisine,
        "class": "uiux development portwrap",
        "mainClass": "main_work",
        "types": "UI/UX | Development",
        "expla":"A mobile app help people regain passion for cooking",
        "title": "Forkie",
      },
        {
          "id": "up",
          "image": up_main,
          "class": "uiux development portwrap",
          "mainClass": "main_work",
          "types": "UI/UX | Development",
          "expla":"A mobile app that promotes productivity and combat stress",
          "title": "Up",
        },
        
        {
          "id": "dote",
          "image": dotenote,
          "class": "ideation uiux portwrap",
          "mainClass": "main_work",
          "types": "UI/UX | Ideation",
          "expla":"Location specific virtual messaging mobile application",
          "title": "DoteNote",
        },
         {
          "id": "buncee",
          "image": buncee_logo,
          "class": "ideation portwrap",
          "mainClass": "main_work",
          "types": "Ideation",
          "expla":"A tool for fostering creativity in school communities (www.buncee.com)",
          "title": "Buncee",
        },
        
      ],
    }
    this.typelist = ['uiux', 'development', 'ideation'];
  }
  closehandler() {
    setTimeout(this.setState({ page: 0 }), 300);

  }
  starOff(){
    this.props.starOff();
  }
  starOn(){
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
    let routelist=[];
    let projectUrl = '';
    for (let i = 0; i < this.state.worklist.length; i++) {
      projectUrl=process.env.PUBLIC_URL +'/projects/'+this.state.worklist[i].id+'/';
      // if(this.state.worklist[i].id === "buncee"){
      //   element.push(
      //     <div id={this.state.worklist[i].id} key={this.state.worklist[i].id} className={this.state.worklist[i].mainClass}  >
      //     <div className={this.state.worklist[i].class} key={this.state.worklist[i].id + "wrapper"}>
      //        <div className="discrip">
      //       <div>
      //         {this.state.worklist[i].title}</div>
      //         <div className="expla">
      //           {this.state.worklist[i].expla}
      //         </div>
      //       </div>
      //     </div>
      //     <div className="discripsmaller">
      //       {this.state.worklist[i].title}<br />
      //       <span className="types"> {this.state.worklist[i].expla}</span>
      //     </div>
      //   </div>
      //   );
      //   continue;
      // }
     element.push(
        <Link to={projectUrl} key={this.state.worklist[i].id+'_link'} >
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
      routelist.push(
        <Route path={projectUrl} key={"routeto_"+this.state.worklist[i].id} render={props => <Projects key="Projects" idnum={this.state.worklist[i].id}  projecttype="/projects" starOff={this.starOff.bind(this)} starOn = {this.starOn.bind(this)}  />}  />
      )
    }
  element = [<div style={{textAlign: "left"}}>{routelist}</div>, <div style={{maxWidth: "1200px", margin: "0 auto"}}>{element}</div>];
    return element
  }
 
  render() {
    return (
      <div className="workbox">
        {this.projects()}

        <div style={{width:"100%", maxWidth:"1200px", margin: "150px auto 0", textAlign: "center", fontSize:"22px", fontWeight:"bold", color:"#475d79", lineHeight: "1.8"}} >
        I also have some cool side projects—feel free to check them out!
        </div>
        
        <div className = "moreExpla" style={{width:"100%", maxWidth:"1200px"}}>
        <div className="moreouterWrap">
          <div className = "morewrap" id="nao" >
            <img src = {nao} />
            <div className = "moretitle">Artwork of Naoshima</div>
            <div className = "moredescrip">A website about Naoshima with my illustrations</div>
            {/* <div className = "btn">Read More</div> */}
          </div>

           <div className = "morewrap" id="momo" >
            <img src = {momo} />
            <div className = "moretitle">Happy Momoko</div>
            <div className = "moredescrip">An animation Emoji set for messaging</div>
            {/* <div className = "btn">Read More</div> */}
          </div>
          </div>
          <div className="moreouterWrap">
          <div className = "morewrap" id="report" >
            <img src = {report} />
            <div className = "moretitle">I am a Reporter</div>
            <div className = "moredescrip">A visual novel game for novice users</div>
            {/* <div className = "btn">Read More</div> */}
          </div>

             <div className = "morewrap" id="log" >
            <img src = {log} />
            <div className = "moretitle">LOG + POS</div>
            <div className = "moredescrip">An audio AR solution improving rescue operations</div>
            {/* <div className = "btn">Read More</div> */}
          </div>
          </div>
          <div style={{width:"100%"}}>
          <a href="https://jayolee.github.io/portfolio/more" rel="noopener noreferrer">
          <div className = "button blue">View more side projects</div></a>
          </div>
        </div>
        
        <div className="mainfaWrap">
          <div className = "mainfa">
            <img src = {fa} />
          </div>
          <div className="mainfades" style={{fontSize:"22px", fontWeight:"bold", color:"#475d79"}}>
            Do you like fine art?
            <br />Check out my fine artwork.<br />

            <a href="https://jayolee.github.io/portfolio/fineart" rel="noopener noreferrer">
            <div className = "button blue" style={{background: "#0b6ff5", lineHeight: "1.5"}}>View More Fine Arts</div>
          </a>
          </div>
          
        </div>
         </div>
    );
  }
}

export default MainProject;
