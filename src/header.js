import React, { Component } from 'react';
import './App.scss';




class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
        pagenumber: 0,
        togglestat: 0,
    }
  }
senddata(e){
    this.props.menustatus(e.target.id);
    this.addactive(e);
    this.setState({togglestat :0});
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
        "Fun":"fun",
        "Fine Art":"FA",
        "About/Contact":"contact",
    };

    let keylist=["Work","Fun", "Fine Art","About/Contact"];
    let currentlist="";
    let pagenum = this.props.pagenum;
    for(let i=0;i<4;i++){
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


navicon_render(){

    let element=[];
        element.push(
        <div id="nav-icon" className={this.state.togglestat == 0 ? ' ' : 'open'} onClick={(ev) =>  this.setState({ togglestat: !(this.state.togglestat)})}>
        <span />
        <span />
        <span />
        <span />
          </div>
        );
   
    return element;
}
  render() {
    console.log('　　　　　　　∩'+'\n'+
    '　　　　　　　||'+'\n'+
    '　　　　　　　||'+'\n'+
    '　　　　　　　||'+'\n'+
    '　　　　　 ／￣￣＼'+'\n'+
    '　　　　　｜　　　 ヽ'+'\n'+
    '　　　　　/　　　　 |'+'\n'+
    '　 |＼　／　／ヽ / ノ'+'\n'+
    '　 |／￣￣￣＼ |/ /'+'\n'+
    '　 /　　　　　Ｖ＿)'+'\n'+
    '　｜(● ●)　 ｜'+'\n'+
    '　王(_人_) 三 /'+'\n'+
    '　 ＼＿＿＿_／'+'\n'+
    '　 _/ /_/ /'+'\n'+
    '　(＿ﾉ(＿ﾉ'+'\n'+' WELCOME!');
    return (
        <div className="header-wrap">
            <div className="header">
    
            <a className="title" href="index.html">
                <div className="logo"></div>
            </a>

           {this.navicon_render()}
            <div className={this.state.togglestat == 0 ? 'menu-wrap' : 'menu-wrap open'}>
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
