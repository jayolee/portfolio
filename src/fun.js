import React, { Component } from 'react';
import './App.scss';
import Projects from './projects.js'
import './projects.scss'
import reporter from './images/lights.jpg'
import even from './images/even2.png'
import momoko from './images/momo.png'
import gssh from './images/gssh.png'
import naoshima from './images/naoshima.png'

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
      },
      worklist:[
        { "id":"naoshima",
        "image":naoshima,
        "class":"development uiux illustartion portwrap",
        "mainClass":"funwork",
        "types": "UI/UX | Development | Illustration",
        "title": "Artwork of NAOSHIMA",
      },
        { "id":"reporter",
          "image":reporter,
          "class":"illustration uiux portwrap",
          "mainClass":"funwork",
          "types": "UI/UX | Illustration",
          "title": "I Am a Reporter",
        },
        { "id":"even",
          "image":even,
          "class":"uiux portwrap",
          "mainClass":"funwork",
          "types": "UI/UX",
          "title": "Even",
        },
        { "id":"momo",
          "image":momoko,
          "class":"animation portwrap",
          "mainClass":"funwork",
          "types": "Animation (Emoji Stickers)",
          "title": "Happy Momoko",
        },
        { "id":"gssh",
          "image":gssh,
          "class":"video portwrap",
          "mainClass":"funwork",
          "types": "Video",
          "title": "GSSH - Class of 2011",
        },
       
      ]
    }
    this.typelist=['uiux', 'development', 'illustration','animation','video'];
  }
  closehandler(){
    setTimeout(this.setState({page:0}), 300);
    
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

  worktypebar(){
    let element=[];
    for(let i=0;i<this.typelist.length;i++){
      element.push(
        <div className={this.state.typenames[this.typelist[i]][1]} key={this.typelist[i]} onClick={this.addActive} id={this.typelist[i]}>{this.state.typenames[this.typelist[i]][0]}</div>)
    }
    return element;
  }

  projects(){
    let element = [];
    for (let i = 0; i < this.state.worklist.length; i++) {
      element.push(
        <div id={this.state.worklist[i].id} key={this.state.worklist[i].id} className={this.state.worklist[i].mainClass} onClick={(ev) => this.setState({ page: 4, curid: this.state.worklist[i].id })}  >
          <div className={this.state.worklist[i].class} key={this.state.worklist[i].id + "wrapper"}>
            <img className="longim" alt={this.state.worklist[i].title} src={this.state.worklist[i].image} key={this.state.worklist[i].title + "image"} />
            <div className="discrip">
              {this.state.worklist[i].title}<br />
              <span className="types">
                {this.state.worklist[i].types}
              </span>
            </div>
          </div>
          <div className="discripsmaller">
            {this.state.worklist[i].title}<br />
            <span className="types">{this.state.worklist[i].types}</span>
          </div>
        </div>
      )
    }
    element=<div><div className="worktypes">{this.worktypebar()}</div>{element}</div>;
    return element  
  }
  renderPageView(){
    if(this.state.page === 4){
      return <Projects idnum={this.state.curid} closehandle={this.closehandler.bind(this)}/>
    };
  }   
  render() {
    return (

        <div className="workbox">
              {this.projects()}
              {this.renderPageView()}
        </div>
       
    );
  }
}

export default Fun;
