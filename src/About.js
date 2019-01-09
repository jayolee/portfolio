import React, { Component } from 'react';
import './App.scss';
import './projects.scss'

import myphoto from './images/photo_me.png'
import res_grey from './images/res_grey.svg'
import res_blk from './images/res_blk.svg'
import git_grey from './images/hub_grey.svg'
import git_blk from './images/hub_blk.svg'
import in_grey from './images/in_grey.svg'
import in_blk from './images/in_blue.svg'

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){

    return (
        <div className="tpotitle">
            <img className="myphoto" src={myphoto} alt="Me" />
            <div className="iconwrap">
            <span className="title">YOUNG</span><br />
            Experience Designer<br /><br />
            <a href="http://goo.gl/j91z25" target="_blank" rel="noopener noreferrer">
            <div className="icons" id="resu"><img src={res_blk} alt="Resume_hover" /><img src={res_grey}  alt="Resume"/></div>
            </a>
            <a href="https://www.linkedin.com/in/jyounglee/" target="_blank" rel="noopener noreferrer">
            <div className="icons" id="linked"><img src={in_blk} alt="Linkedin_hover"/><img src={in_grey} alt="Linkedin"/></div>
            </a>
            <a href="https://github.com/jayolee" target="_blank" rel="noopener noreferrer">
            <div className="icons" id="git"><img src={git_blk} alt="Github_hover"/><img src={git_grey} alt="Github"/></div>
            </a>
            </div>
    </div>

    );
  }
}

export default About;
