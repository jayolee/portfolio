import React, { Component } from 'react';

import phone from './Dotenote/phone.png'
import dote6 from './Dotenote/screen1.jpg'
import dote7 from './Dotenote/screen2.png'
import dote10 from './Dotenote/screen3.png'
import dote11 from './Dotenote/screen4.png'
import dote12 from './Dotenote/screen6.png'
import dote13 from './Dotenote/screen7.png'
import dote14 from './Dotenote/screen8.jpg'
import dote_prev from './Dotenote/screen_prev.jpg'

class Dote extends Component {

    constructor(props) {
        super(props);
        this.state = {
            screen: 0,
        }
    }
    renderScreen() {
        switch (this.state.screen) {
            case 0:
                return (
                    <div className="phone" key="phone">
                        <img src={dote6} className="phonesc" alt="Main Screen" />
                        <img src={phone} alt="Phone" id="andPhone"/>
                        <div className="scbtn" id="mapbtn" onClick={(ev) => this.setState({ screen: 1 })} />
                        <div className="scbtn" id="plusbtn" onClick={(ev) => this.setState({ screen: 2 })} />
                    </div>
                );
            case 1:
                return (
                    <div className="phone" key="phone">
                        <img src={dote7} className="phonesc" alt="Map Screen" />
                        <img src={phone} alt="Phone"  id="andPhone"/>
                        <div className="scbtn" id="mapback" onClick={(ev) => this.setState({ screen: 0 })} />
                    </div>
                );
            case 2:
                return (
                    <div className="phone" key="phone">
                        <img src={dote10} className="phonesc" alt="Select Item Screen" />
                        <img src={phone} alt="Phone"  id="andPhone"/>
                        <div className="scbtn" id="selectback" onClick={(ev) => this.setState({ screen: 0 })} />
                        <div className="scbtn" id="item" onClick={(ev) => this.setState({ screen: 3 })} />
                    </div>
                );
            case 3:
                return (
                    <div className="phone" key="phone">
                        <img src={dote11} className="phonesc" alt="Item Menu" />
                        <img src={phone} alt="Phone"  id="andPhone"/>
                        <div className="scbtn" id="selectback" onClick={(ev) => this.setState({ screen: 2 })} />
                        <div className="scbtn" id="write" onClick={(ev) => this.setState({ screen: 4 })} />
                    </div>
                );
            case 4:
                return (
                    <div className="phone" key="phone">
                        <img src={dote12} className="phonesc" alt="Item Menu" />
                        <img src={phone} alt="Phone" id="andPhone" />
                        <div className="scbtn" id="selectback" onClick={(ev) => this.setState({ screen: 3 })} />
                        <div className="scbtn" id="writeOkay" onClick={(ev) => this.setState({ screen: 5 })} />
                    </div>
                );
            case 5:
                return (
                    <div className="phone" key="phone">
                        <img src={dote13} className="phonesc" alt="Item Menu" />
                        <img src={phone} alt="Phone" id="andPhone" />
                        <div className="scbtn" id="selectback" onClick={(ev) => this.setState({ screen: 2 })} />
                        <div className="scbtn" id="preview" onClick={(ev) => this.setState({ screen: 6 })} />
                    </div>
                );
            case 6:
                return (
                    <div className="phone" key="phone">
                        <img src={dote_prev} className="phonesc" alt="Item Menu" />
                        <img src={phone} alt="Phone"  id="andPhone"/>
                        <div className="scbtn" id="selectback" onClick={(ev) => this.setState({ screen: 5 })} />
                        <div className="scbtn" id="send" onClick={(ev) => this.setState({ screen: 7 })} />
                    </div>
                );
            case 7:
                return (
                    <div className="phone" key="phone">
                        <img src={dote14} className="phonesc" alt="Item Menu" />
                        <img src={phone} alt="Phone"  id="andPhone"/>
                        <div className="scbtn" id="confirm" onClick={(ev) => this.setState({ screen: 0 })} />
                    </div>
                );

        }
    }
    render() {

        return (
            <div className="expla" >
                {this.renderScreen()}
            </div>

        );
    }
}

export default Dote;
