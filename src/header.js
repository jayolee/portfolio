import React, { Component } from 'react';
import './App.scss';




class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
        pagenumber: 0,
    }
  }
senddata(e){
    this.props.menustatus(e.target.id);
    this.addactive(e);
}
addactive(e){
    let activemenu=document.getElementsByClassName("activemenu")[0];
    activemenu.classList.remove("activemenu");
    activemenu.parentNode.classList.remove("active");
    e.target.classList.add("activemenu");
    e.target.parentNode.classList.add('active');
}
  headergenerator(){
    let element=[];
    let menulist={
        "Work":"work",
        "Fine Art":"FA",
        "About/Contact":"contact",
    };

    let keylist=["Work","Fine Art","About/Contact"];
    let currentlist="";
    let pagenum = this.props.pagenum;
    for(let i=0;i<3;i++){
        if(pagenum == i){
      element.push( 
      <li id={menulist[keylist[i]]} className = "active"> 
        <div className="menudot active" />
        <a className="activemenu" id={i} onClick={this.senddata.bind(this)}>{keylist[i]}</a>
                    </li>
      );
      }
      else{
          element.push( 
        <li id={menulist[keylist[i]]}> 
          <div className="menudot" />
          <a onClick={this.senddata.bind(this)} id={i} >{keylist[i]}</a>
                      </li>
        );
    }
}
    return(element);
  }




  render() {
    return (
        <div className="header-wrap">
            <div className="header">
    
            <a className="title" href="index.html">
                <div className="logo"></div>
            </a>
            <div className="menu-wrap">
                <nav className="menu">
                <ul className="clearfix">
                    {this.headergenerator()}
                </ul>
                </nav>
            </div>
          </div>
        </div>
    );
  }
}

export default Header;