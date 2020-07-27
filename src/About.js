import React, { Component } from 'react';
import './App.scss';
import './projects.scss'

import myphoto from './images/photo_me.jpg'
import peach from './images/peach.svg'

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render(){

    return (
        <div className="tpotitle">
           
            <div className="iconwrap">
            {/* <span className="title">YOUNG</span><br />
            Experience Designer<br /><br /> */}
            {/* <a href="http://goo.gl/j91z25" target="_blank" rel="noopener noreferrer">
            <div className="icons" id="resu"><img src={res_blk} alt="Resume_hover" /><img src={res_grey}  alt="Resume"/></div>
            </a>
            <a href="https://www.linkedin.com/in/jyounglee/" target="_blank" rel="noopener noreferrer">
            <div className="icons" id="linked"><img src={in_blk} alt="Linkedin_hover"/><img src={in_grey} alt="Linkedin"/></div>
            </a>
            <a href="https://github.com/jayolee" target="_blank" rel="noopener noreferrer">
            <div className="icons" id="git"><img src={git_blk} alt="Github_hover"/><img src={git_grey} alt="Github"/></div>
            </a> */}
            <div className="bio" style = {{background: "rgba(255,255,255,.5)"}}>
            <div>
            <img src={peach} style = {{width: "80px", display:"block", margin:"0 auto 12px", strokeLinecap:"round" }}   alt="Me" />
            <span className="hello">Hello, I am Young.</span><br /> <p>I am a designer, developer, and an artist who loves to implement my ideas into usable products/services. I use various multimedia skills with coding as my mediums.</p>
<p>As a person has a Fine Art background and visual design experiences, my strength resides having keen eyes on details. Also, as a designer who spent most of the times with people who are not in the field, it is my strength working with and taking account of diverse perspectives. </p><p>
  With UX design experience at an EdTech Startup whose product changed the way of education, I have an interest in learning new technologies and design a digital solution to improve the everyday life while considering the shortcomings of the technology. Also, while working on a product targeted people who are not tech-savvy, I got interested in creating intuitive interactions.</p> 
            </div>
            </div>
            </div>
    </div>

    );
  }
}

export default About;
