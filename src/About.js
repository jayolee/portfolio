import React, { Component } from 'react';
import './App.scss';
import './projects.scss'

import myphoto from './images/photo_me.jpg'
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
            <div className="bio">
            <div>
            <span className="hello">Hello, I am Young.</span><br /> <p>I am a designer and developer who loves to code to implement my designs.</p>
<p>As a person has a Fine Art background and graphic, aesthetic design experiences, my strength resides in a strong sense of aesthetics and having keen eyes on details. Also, as a designer who spent most of the times with people who are not in the field, it is my strength working with and taking account of diverse perspectives. With this experience and UX design experience at an EdTech Startup whose product targeted people who are not tech-savvy, I have an interest in creating intuitive interactions.</p> 
<p>My Fine Art experience made me a creator loves to implement my ideas into usable products/services. I use codes with various multimedia skills as mediums.</p>
            </div>
            </div>
            </div>
    </div>

    );
  }
}

export default About;
