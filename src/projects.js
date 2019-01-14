import React, { Component } from 'react';
import './App.scss';
import './projects.scss'
import { projectList } from './project_list'

class Projects extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      active: true,
      opacity:0,
      transform: "translateY(700px)",
    }
    this.vidid = {
      "log": "5Q6vJg-OufI",
      "dote": "zlp8SnxFN3I",
      "gssh": "lUaJy9qo6qA",
    }
    this.contents = projectList;
  }
  
  rollup() {
    this.setState({opacity:1})
    setTimeout(function () { this.setState({transform:"translateY(0)"}) }.bind(this), 50)


  }
  rolldown() {
    this.setState({opacity:0, transform:"translateY(700px)"});
    setTimeout(function () { this.props.closehandle(); }.bind(this), 500)
  }

  contentgenerator() {
    let item = this.props.idnum;
    let element = [];
    let topelement = [];
    let contentelement = [];
    let explalist = Object.keys(this.contents[item].exlpla);
    for (let i = 0; i < explalist.length; i++) {
      topelement.push(
        <div key={"expla" + i}>
          <span className={"title " + this.props.idnum} >{explalist[i]}: </span>{this.contents[item].exlpla[explalist[i]]}<br />
        </div>
      )
    }
    let contentlist = Object.keys(this.contents[item]);


    for (let i = 4; i < contentlist.length; i++) {
      if (this.contents[item].button && i === 4) {
        i += 1;
      }
      contentelement.push(
        <div key={"sectitle" + i}>
          <div className={"sectitle " + this.props.idnum} >{contentlist[i]}</div>
          <div className={"bar " + this.props.idnum} />
          {this.contents[item][contentlist[i]]}
        </div>
      )
    }
    if (this.contents[item].button) {
      element.push(<div className="contentbox" key="contentbox" style={{opacity:this.state.opacity, transform:this.state.transform}}> 
        <div className={"enttitle " + this.props.idnum} >{this.contents[item].projectTitle}
          <div className="xmark" onClick={this.rolldown.bind(this)}>
            <svg width="50" height="50">
              <path d="M10 10 L40 40 M40 10 L10 40" />
            </svg>
          </div>
        </div>
        <div className="maincontent">
          {this.contents[item].topimg}
          <div className="toptitle ">
            <div className={"qtmark " + this.props.idnum} > <q></q> </div>
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
    else {
      element.push(<div className="contentbox" key="contentbox" style={{opacity:this.state.opacity, transform:this.state.transform}}>
        <div className={"enttitle " + this.props.idnum} >{this.contents[item].projectTitle}
          <div className="xmark" onClick={this.rolldown.bind(this)}>
            <svg width="50" height="50">
              <path d="M10 10 L40 40 M40 10 L10 40" />
            </svg>
          </div>
        </div>
        <div className="maincontent">
          {this.contents[item].topimg}
          <div className="toptitle ">
            <div className={"qtmark " + this.props.idnum} > <q></q> </div>
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
  componentDidMount() {
    window.scrollTo(0, 0)
    setTimeout(this.rollup(), 100);
  }
  render() {
    return (
      <div style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%" }}>
        <div className="greybox" style={{opacity:this.state.opacity}}/>
        {this.contentgenerator()}
        <div className={"gototop "+ this.props.idnum} style={{opacity:this.state.opacity}} onClick={(ev) => window.scroll(0,0)} >
        <svg width="30" height="30">
              <path d="M4 15 L15 4 L26 15 M15 4 L15 26" />
            </svg>
            <div className={"gototop_descrip " + this.props.idnum}>Go to Top
            </div>
            <div className={"triangle " + this.props.idnum} /></div>
      </div>

    );
  }
}

export default Projects;
