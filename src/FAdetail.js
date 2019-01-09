import React, { Component } from 'react';
import './App.scss';
import './projects.scss'

class FAdetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentOrder: this.props.orderinArray,
    }
  }
  
  componentDidMount() {
    window.scrollTo(0, 0)
  }
renderImg(){
  return (
    <div>
    <img className="detailImg" alt={this.props.imglist[this.state.currentOrder].name} src={this.props.imglist[this.state.currentOrder].image} />
    <div className="title">{this.props.imglist[this.state.currentOrder].name}</div>
    <div className="descrip">{this.props.imglist[this.state.currentOrder].info}</div>
    </div>
  )
}

renderArrows(){
    var curnum= this.props.imglist[this.state.currentOrder].order;
    var element=[];


    if (curnum === "first"){
      element.push(
      <div className="detail_wrapper" key="detail_wrapper">
      <svg className="icon" height="60" width="26" >
        <path d="M26 5 L12 30 L26 60" fill="none" opacity="0" strokeWidth="3"/>
      </svg>
    
    {this.renderImg()}
      
      <svg className="icon right" height="60" width="26" onClick = {(ev) => {this.setState({currentOrder: this.state.currentOrder+1}); }}>
        <path d="M26 5 L12 30 L26 60" stroke="rgba(0, 0, 0, 0.4)" fill="none" strokeWidth="3"/>
      </svg>
    </div>
    )
    }
    else if(curnum === "last"){
      element.push(
      <div className="detail_wrapper" key="detail_wrapper">
      <svg className="icon" height="60" width="26" onClick = {(ev) => this.setState({currentOrder: this.state.currentOrder-1})}>
        <path d="M26 5 L12 30 L26 60" stroke="rgba(0, 0, 0, 0.4)" fill="none" strokeWidth="3"/>
      </svg>
    
    {this.renderImg()}
      
      <svg className="icon right" height="60" width="26" >
        <path d="M26 5 L12 30 L26 60" fill="none" opacity="0" strokeWidth="3"/>
      </svg>
    </div>
    )}
    else{
      element.push(
      <div className="detail_wrapper" key="detail_wrapper">
      <svg className="icon" height="60" width="26" onClick = {(ev) => this.setState({currentOrder: this.state.currentOrder-1})}>
        <path d="M26 5 L12 30 L26 60" stroke="rgba(0, 0, 0, 0.4)" fill="none" strokeWidth="3"/>
      </svg>
    
        {this.renderImg()}
      
      <svg className="icon right" height="60" width="26" onClick = {(ev) => this.setState({currentOrder: this.state.currentOrder+1})}>
        <path d="M26 5 L12 30 L26 60" stroke="rgba(0, 0, 0, 0.4)" fill="none"  strokeWidth="3"/>
      </svg>
    </div>
    )
    }
    return element;
  }

  
  render(){

    return (
        <div>
        <div className="greybox" />
          <div className="FAdetail">
          <div className="xmark" onClick={this.props.closehandle} >
              <svg width="50" height="50">
               <path d="M10 10 L40 40 M40 10 L10 40" />
              </svg>
          </div>
              {this.renderArrows()}
              </div>
        </div>


    );
  }
}

export default FAdetail;
