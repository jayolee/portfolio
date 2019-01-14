import React, { Component } from 'react';
import './App.scss';
import './projects.scss'
import './FA.scss'


class FaCv extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opacity:0,
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
    render() {

        return (
            <div style={{opacity:this.state.opacity, transition:'.3s'}} >
            <div className="greybox" />
                
                <div className="FAdetail Facv">
                <div className="xmark" onClick={this.closing.bind(this)} >
                    <svg width="50" height="50">
                        <path d="M10 10 L40 40 M40 10 L10 40" />
                    </svg>
                </div>
                    <div className="FAcv_detail">
                    <p className="biotitle">Shows</p>
                    <div className="titlebar" />
                    <div className="biocontent">
                        <div className="bioyear">2016</div>
                        <div className="bioname"> <span class="title">"Beauty in the Abstract"</span> at The Art Guild, Manhasset, NY
          <br /> <span class="title">"INCIPIENT"</span> at Melville Library, Stony Brook, NY
          <br /> <span class="title">"Visual Trick or Visual Treat"</span> at The Art Guild, Manhasset, NY
          <br /> <span class="title">"A New Light" - Spring Awakening"</span> at Studio 5404, Massapequa, NY
        </div>
        </div>
                        <div className="biocontent">
                        <div className="bioyear ">2015</div>
                        <div className="bioname"> 
                        <span class="title">"Art From The Heart 10x10"</span> at The Art Guild, Manhasset, NY
          <br /> <span class="title">"Deck the Halls"</span> at Gallery North, Stony Brook, NY
          <br /> <span class="title">"Port To Port"</span> at The Art Guild, Manhasset, NY
          <br /> <span class="title">"Outdoor Art Show"</span> at Mount Gretna, PA
          <br /> <span class="title">"American Icons: Contemporary Prints"</span> at Gallery North, Stony Brook, NY
          <br /> <span class="title">"Art of Painting"</span> at Washington Art Association, CT</div>
          </div>
                        <div className="biocontent">
                        <div className="bioyear">2014</div>
                        <div className="bioname">
                        <span class="title">"Stand Out Prints"</span> at Highpoint Center, MN
          <br /> <span class="title">"17
          <sup>th</sup> Annual ISAP"</span> at The Showroom Gallery, CA
          <br />
                        </div>
                        </div>
                        <div className="biocontent">
                        <div className="bioyear">2013</div>
                        <div className="bioname">
                        <span class="title">"Outdoor Art Show"</span> at Mount Gretna, PA
          <br /> <span class="title">"small works - BIG TALENT"</span> at Las Laguna Gallery, CA
          <br /> <span class="title">"First Friday Show"</span> at Marketview Arts, PA
          <br /> <span class="title">"MGSOA Student Show"</span> at Mount Gretna, PA
          <br /> <span class="title">“Senior Show”</span> at Paul W. Zuccaire Gallery, NY
          <br /> <span class="title">“Sunwood Exhibition”</span> at Sunwood Estate, NY
          <br /> <span class="title">“URECA Exhibition”</span> at SAC Gallery, Stony Brook, NY
          <br /> <span class="title">“Zeitgeist: The Spirit of Our Time MAMA Show”</span> at SAC Gallery, Stony Brook, NY
          <br />
                        </div>
                        </div>
                        <div className="biocontent">
                        <div className="bioyear">2012</div>
                        <div className="bioname">
                        <span class="title">“Down to the Earth”</span> at Student Union, Stony Brook, NY</div>
                    </div>


                    <p className="biotitle">Awards</p>
                    <div className="titlebar"></div>
                    <div className="biocontent">
                        <div className="bioyear">2016</div>
                        <div className="bioname"> 
                        <span class="title">“Honorable Mention,”</span> Visual Trick or Visual Treat</div>
                        </div>
                        <div className="biocontent">
                        <div className="bioyear">2013</div>
                        <div className="bioname"> 
                        <span class="title">“3<sup>rd</sup> Placement,”</span> URECA Art Competition
          <br /> <span class="title">“Dean of the College of Arts and Sciences’ Purchase Award,”</span> Senior Show
          <br /> <span class="title">“President’s Purchase Award,”</span> Senior Show</div>
                    </div>
                </div>
                </div>
            </div>

        );
    }
}

export default FaCv;
