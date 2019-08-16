import React, { Component } from 'react';
import './App.scss';
import './projects.scss'

class ImgDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      opacity:0,
      scroll:0,
    }
  }
  componentDidMount(){
    setTimeout(function(){
        this.setState({opacity:1})
    }.bind(this),10);
}
closing(){
    this.setState({opacity:0});
    setTimeout(function(){this.props.closehandle()}.bind(this),300);;

}

  render(){

    return (
        <div style={{opacity:this.state.opacity, transition:'.3s'}}>
        <div className="greybox" onClick={this.closing.bind(this)} />
          <div className="imgDetail">
          <img src={this.props.src} />
        </div>
        </div>


    );
  }
}

export default ImgDetail;
