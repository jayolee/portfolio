import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import './App.scss';
import './projects.scss'
import { projectList } from './project_list'
import { sideList } from './subproject_list'

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      active: true,
      opacity:0,
      transform: "translateY(700px)",
      detail: 0,
      imgSrc: '',
      width: 0,
      anistat: 1,
      anilist:["","btnBounce"]
    }
    this.exitLink=process.env.PUBLIC_URL + this.props.projecttype;
    this.vidid = {
      "log": "5Q6vJg-OufI",
      "dote": "zlp8SnxFN3I",
      "gssh": "lUaJy9qo6qA",
    }
    this.contents = projectList;
    this.sideContent = sideList;
    this.width = 0;
  }
  rollup() {
    this.setState({opacity:1})
    setTimeout(function () { this.setState({transform:"translateY(0)"}) }.bind(this), 50)
    

  }
  rolldown() {
    this.setState({opacity:0, transform:"translateY(700px)"});
    setTimeout(function () {
      this.props.history.push(this.exitLink);}.bind(this), 400)
  }

  contentgenerator() {
    let content;
    if(this.props.category ==="mainwork"){
        content = this.contents;
    } else{
        content = this.sideContent;
    }

    let item = this.props.idnum;
    let element = [];
    let topelement = [];
    let contentelement = [];
    let explalist = Object.keys(content[item].exlpla);
    //topinfo (team, name...)
    for (let i = 0; i < explalist.length; i++) {
      topelement.push(
        <div key={"expla" + i} className="topinfo">
          <span className={"title " + this.props.idnum} >{explalist[i]}: </span>{content[item].exlpla[explalist[i]]}<br />
        </div>
      )
    }
    let contentlist = Object.keys(content[item]);


    for (let i = 4; i < contentlist.length - 1 ; i++) {
      if (content[item].button && i === 4) {
        i += 1;
      }
      contentelement.push(
        <div key={"sectitle" + i}>
          <div className={"sectitle " + this.props.idnum} >{contentlist[i]}
          <div className={"bar " + this.props.idnum} />
          </div>
          
          {content[item][contentlist[i]]}
        </div>
      )
    }

    let finalkey = contentlist.length - 1;
    contentelement.push(
      <div key={"sectitle" + finalkey}  onMouseOut={this.gotoTopNone.bind(this)}  onMouseOver={this.gotoTopBounce.bind(this)} >
        <div className = {"sectitle " + this.props.idnum} >
        {contentlist[finalkey]}
        <div className = {"bar " + this.props.idnum} />
        </div>
        {content[item][contentlist[finalkey]]}
      </div>
    )

    if (content[item].button) {
      element.push(<div className="contentbox" key="contentbox" style={{opacity:this.state.opacity, transform:this.state.transform}}> 
        <div className="contentBottom" onMouseOut={this.gotoTopNone.bind(this)}  onMouseOver={this.gotoTopBounce.bind(this)}></div>
        <div className={"enttitle " + this.props.idnum} >{content[item].projectTitle}

          <div className="xmark" onClick={this.rolldown.bind(this)}>
            <svg width="50" height="50">
              <path d="M10 10 L40 40 M40 10 L10 40" />
            </svg>
          </div>

        </div>
        <div className={"maincontent " + this.props.idnum}>
          {content[item].topimg}
          <div className="toptitle">
            <div className={"qtmark " + this.props.idnum}> <q></q> </div>
            {content[item].quote}

          </div>
          <div className="center">
            {content[item].button}</div>
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
    else {
      element.push(<div className="contentbox" key="contentbox" style={{opacity:this.state.opacity, transform:this.state.transform}}>
        <div className="contentBottom" onMouseOut={this.gotoTopNone.bind(this)} onMouseOver={this.gotoTopBounce.bind(this)}></div>
        
        <div className={"enttitle " + this.props.idnum} >{content[item].projectTitle}
          <div className="xmark"  onClick={this.rolldown.bind(this)}>
            <svg width="50" height="50">
              <path d="M10 10 L40 40 M40 10 L10 40" />
            </svg>
          </div>
        </div>
        <div className="maincontent">
          {content[item].topimg}
          <div className="toptitle "  style= {{maxWidth: "800px"}}>
            <div className={"qtmark " + this.props.idnum}> <q></q> </div>
            {content[item].quote}
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
  componentDidMount() {
    window.scrollTo({top: 0, left: 0})
    setTimeout(this.rollup(), 10);
    this.setState({anistat:0});
    if(this.props.starOff()){
    this.props.starOff();}
    this.width = window.innerWidth;
  }
  componentWillUnmount() {
    this.props.starOn();
  }
  gotoTopNone() {
    if(this.state.anistat === 1){
    this.setState({anistat:0})
    }
  }
  gotoTopBounce() {
    if(this.state.anistat === 0){
    this.setState({anistat:1})
  }
  }
  renderDetail(){
    if(this.state.detail === 1){
      return <imgDetail key="detailview" src={this.state.src}/>
    }
  }
  render() {
    return (
      <div style={{ position: "relative", top: "0", left: "0", width:"100%", height: "100%" }}>
        <div className="greybox" style={{opacity:this.state.opacity}} onClick={this.rolldown.bind(this)}/>
        {this.contentgenerator()}
        
           {this.renderDetail()}
<div>
           <div className={"gototop "+ this.props.idnum} id={this.state.anilist[this.state.anistat]} key="topBtn" style={{opacity:this.state.opacity}} onClick={(ev) => window.scroll({top: 0, left: 0,  behavior: 'smooth'})} >
        <svg width="30" height="30">
              <path d="M4 15 L15 4 L26 15 M15 4 L15 26" />
            </svg>
            <div className={"gototop_descrip " + this.props.idnum}>Go to Top
            </div>
            <div className={"triangle " + this.props.idnum} />
            </div>
            </div>
      </div>

    );
  }
}

export default withRouter(Projects);
