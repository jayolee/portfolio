import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import res_grey from './images/res_grey.svg'
import res_blk from './images/res_blk.svg'
import git_grey from './images/hub_grey.svg'
import git_blk from './images/hub_blk.svg'
import in_grey from './images/in_grey.svg'
import in_blk from './images/in_blue.svg'
class Toptitle extends Component {

  constructor(props) {
    super(props);
    this.state = {
        page:this.props.location.pathname.toLowerCase(),
    }
    this.curpagePath = this.props.location.pathname.toLowerCase();
    this.titleStyle = ["block", "none"] ;
    this.pagenum = {
        "projects" : 0,
        "more" : 0,
        "fa" : 0,
        "about" : 1
    }
  }

  render() {
    return (
              <div>
                {/* <img src={logo} id="ylogo" alt="logo"/> */}
               <div key="title" style={{display:this.titleStyle[this.pagenum[this.state.page]]}}>
                      <div className="titles">Hi! I am <span style={{color:"#0b6ff5", fontWeight: "bold"}}>Young</span>,<br /><span style={{ fontSize: "18px"}}>a UX designer, developer and an artist</span></div>
                      <a href="http://goo.gl/j91z25" target="_blank" rel="noopener noreferrer" style={{ margin: "10px" }}>
                        <div className="icons" id="resu"><img src={res_blk} alt="Resume_hover" /><img src={res_grey} alt="Resume" /></div>
                      </a>
                      <a href="https://www.linkedin.com/in/jyounglee/" target="_blank" rel="noopener noreferrer" style={{ margin: "10px" }}>
                        <div className="icons" id="linked"><img src={in_blk} alt="Linkedin_hover" /><img src={in_grey} alt="Linkedin" /></div>
                      </a>
                      <a href="https://github.com/jayolee" target="_blank" rel="noopener noreferrer" style={{ margin: "10px" }}>
                        <div className="icons" id="git"><img src={git_blk} alt="Github_hover" /><img src={git_grey} alt="Github" /></div>
                      </a></div>
              </div>


    );
  }
}

export default withRouter(Toptitle);
