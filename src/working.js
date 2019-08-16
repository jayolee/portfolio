import React, { Component } from 'react';
import './App.scss';
import './projects.scss'


class Workings extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: 3,
      active:true,
    }
  }


  rollup(){
    let contentdiv=document.getElementsByClassName("working")[0];
    let greydiv=document.getElementsByClassName("greybox")[0];
    contentdiv.style.opacity="1";
    greydiv.style.opacity="1";
    setTimeout(function(){  contentdiv.style.transform="translateX(-50%) translateY(calc(-50%))";},50)
  
   
}
rolldown(){
      let contentdiv=document.getElementsByClassName("working")[0];
  let greydiv=document.getElementsByClassName("greybox")[0];
  contentdiv.style.opacity="0";
  contentdiv.style.transform="translateX(-50%) translateY(calc(-50% - 50px))";
  greydiv.style.opacity="0";
      setTimeout(function(){this.props.closehandle();}.bind(this),500)
}

  componentDidMount(){
    setTimeout(this.rollup(),100);
  }
  render() {

    

    return (
      <div style={{position:"absolute", top:"0",left:"0",width:"100%",height:"100%"}}>
      <div className="greybox" />
      <div class="contentbox working" >
          <div className="xmark" onClick={this.rolldown.bind(this)}>
              <svg width="50" height="50">
               <path d="M10 10 L40 40 M40 10 L10 40" />
              </svg>
          </div>
         <div className="maincontent">
          <div className="toptitle ">
          <div className="workingalert">!</div>
           Currently Working on this page!
          </div>
         </div>
         </div>
      </div>

    );
  }
}

export default Workings;
