import React, { Component } from 'react';
import './App.scss';
import './projects.scss'
import {projectList} from './project_list'

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      active:true,
    }
    this.vidid={
      "log":"5Q6vJg-OufI",
      "dote":"zlp8SnxFN3I",
      "gssh":"lUaJy9qo6qA",
    }
    this.contents=projectList;
  }
  rollup(){
      let contentdiv=document.getElementsByClassName("contentbox")[0];
      let greydiv=document.getElementsByClassName("greybox")[0];
      contentdiv.style.opacity="1";
      greydiv.style.opacity="1";
      setTimeout(function(){  contentdiv.style.transform="translateY(0)";},50)
    
     
  }
  rolldown(){
		let contentdiv=document.getElementsByClassName("contentbox")[0];
    let greydiv=document.getElementsByClassName("greybox")[0];
    contentdiv.style.opacity="0";
    contentdiv.style.transform="translateY(700px)";
    greydiv.style.opacity="0";
		setTimeout(function(){this.props.closehandle();}.bind(this),500)
  }
  
  contentgenerator(){
    let item=this.props.idnum;
    let element=[];
    let topelement=[];
    let contentelement=[];
    let explalist=Object.keys(this.contents[item].exlpla);
    for(let i =0;i<explalist.length;i++){
      topelement.push(
        <div>
        <span className={"title "+this.props.idnum} >{explalist[i]}: </span>{this.contents[item].exlpla[explalist[i]]}<br />
        </div>
      )
    }
    let contentlist=Object.keys(this.contents[item]);


    for(let i=4;i<contentlist.length;i++){
      if(this.contents[item].button && i==4){
        i += 1;
      }
      contentelement.push(
        <div>
          <div className={"sectitle "+this.props.idnum} >{contentlist[i]}</div>
          <div className={"bar "+this.props.idnum} />
          {this.contents[item][contentlist[i]]}
        </div>
      )
    }
      if(this.contents[item].button){
        element.push(<div className="contentbox" >
        <div className={"enttitle "+this.props.idnum} >{this.contents[item].projectTitle}
         <div className="xmark" onClick={this.rolldown.bind(this)}>
             <svg width="50" height="50">
              <path d="M10 10 L40 40 M40 10 L10 40" />
             </svg>
         </div>
       </div>
        <div className="maincontent">
           {this.contents[item].topimg}
         <div className="toptitle ">
           <div className={"qtmark "+this.props.idnum} > <q></q> </div>
           {this.contents[item].quote}
           
         </div>
         <div className="center">
         {this.contents[item].button}</div>
         <div className="expla"> 
           {topelement}
           </div>
         <div className="expla">
           {contentelement}
         </div>
        </div>
        </div>
        )
      }
      else{
      element.push(<div className="contentbox" >
         <div className={"enttitle "+this.props.idnum} >{this.contents[item].projectTitle}
          <div className="xmark" onClick={this.rolldown.bind(this)}>
              <svg width="50" height="50">
               <path d="M10 10 L40 40 M40 10 L10 40" />
              </svg>
          </div>
        </div>
         <div className="maincontent">
            {this.contents[item].topimg}
          <div className="toptitle ">
            <div className={"qtmark "+this.props.idnum} > <q></q> </div>
            {this.contents[item].quote}
          </div>
          <div className="expla"> 
            {topelement}
            </div>
          <div className="expla">
            {contentelement}
          </div>
         </div>
         </div>
         )
         }
      return element
  }
  componentDidMount(){
    setTimeout(this.rollup(),100);
  }
  render() {

    

    return (
      <div style={{position:"absolute", top:"0",left:"0",width:"100%",height:"100%"}}>
      <div className="greybox" />
        {this.contentgenerator()}
      </div>

    );
  }
}

export default Projects;
