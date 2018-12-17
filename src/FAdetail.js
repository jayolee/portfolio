import React, { Component } from 'react';
import './App.scss';
import './projects.scss'

class FAdetail extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }
  
  listgenerator(imagelist) {
    let element=[];

  return element
}



renderArrows(){
    var id= this.props.idnum[this.props.iddata];
    var element=[];
    var idorder=this.state.currentNum;

    if (idorder == 0){
      element.push(
      <div className="detail_wrapper" >
      <svg className="icon" height="60" width="26" >
        <path d="M26 5 L12 30 L26 60" fill="none" opacity="0" stroke-width="3"/>
      </svg>
    
    {this.renderImg()}
      
      <svg className="icon right" height="60" width="26" onClick = {(ev) => {this.setState({currentNum: this.state.currentNum+1}); }}>
        <path d="M26 5 L12 30 L26 60" fill="none" stroke-width="3"/>
      </svg>
    </div>
    )
    }
    else if(idorder == this.infolist[id].length-1){
      element.push(
      <div className="detail_wrapper" >
      <svg className="icon" height="60" width="26" onClick = {(ev) => this.setState({currentNum: this.state.currentNum-1})}>
        <path d="M26 5 L12 30 L26 60" fill="none" stroke-width="3"/>
      </svg>
    
    {this.renderImg()}
      
      <svg className="icon right" height="60" width="26" >
        <path d="M26 5 L12 30 L26 60" fill="none" opacity="0" stroke-width="3"/>
      </svg>
    </div>
    )}
    else{
      element.push(
      <div className="detail_wrapper" >
      <svg className="icon" height="60" width="26" onClick = {(ev) => this.setState({currentNum: this.state.currentNum-1})}>
        <path d="M26 5 L12 30 L26 60" fill="none" stroke-width="3"/>
      </svg>
    
        {this.renderImg()}
      
      <svg className="icon right" height="60" width="26" onClick = {(ev) => this.setState({currentNum: this.state.currentNum+1})}>
        <path d="M26 5 L12 30 L26 60" fill="none"  stroke-width="3"/>
      </svg>
    </div>
    )
    }
    return element;
  }

  
  render(){

    return (
        <div className="vis" >
        <div ClassName="blackbox" >
            <div class="blackbox-xmark">
                <img src= "xmark.svg"/>
            </div>
            <div class="blackbox-content">
                <div class="arrowwrapper">
                <svg className="icon" height="60" width="26" >
        <path d="M26 5 L12 30 L26 60" fill="none" opacity="0" stroke-width="3"/>
      </svg>
                </div>
    
                <div class="iteminfo" >
                    <div class="imglg" >
                        <img id="largeimg" src="#"/><br />
                        <span id="title">Summer Shadows(2016)</span><br />
                        <span id="ptinfo"> 24"x30" Oil on canvas</span>
                    </div>
                </div>
    
                <div  class="arrowwrapper">	
                <svg className="icon right" height="60" width="26" onClick = {(ev) => {this.setState({currentNum: this.state.currentNum+1}); }}>
        <path d="M26 5 L12 30 L26 60" fill="none" stroke-width="3"/>
      </svg>
                </div>
            </div>
            </div>
        </div>
    </div>
    </div>

    );
  }
}

export default FAdetail;
