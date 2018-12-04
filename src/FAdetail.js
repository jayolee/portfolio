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
    for(let i=0;i<imagelist.length;i++){
        element.push(
          <a href="#" className="fa" curid={imagelist[i]}  >
            <div className="portwrap fa" >
              <img className="longim" src={imagelist[i].image} />
              <div className="titlebox">
              {imagelist[i].name}<br />
              <span className="types">
              {imagelist[i].info}
              </span>
              </div>
            </div>
          </a>
        )
  }
  return element
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
                    <img id="toprev"  src="arrowpre.png" />
                </div>
    
                <div class="iteminfo" >
                    <div class="imglg" >
                        <img id="largeimg" src="#"/><br />
                        <span id="title">Summer Shadows(2016)</span><br />
                        <span id="ptinfo"> 24"x30" Oil on canvas</span>
                    </div>
                </div>
    
                <div  class="arrowwrapper">	
                    <img id="tonext" src="arrow.png" />
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
