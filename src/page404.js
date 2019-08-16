import React, { Component } from 'react'
import momo from './images/404momo.svg'
import './App.scss';

class Page404 extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount(){
        this.props.updateLogo(1);
    }
    componentWillUnmount(){
        this.props.updateLogo(0);
    }
    render() {
        
        return (
            <div id="momo404Wrap">
                <img src={momo} alt="404page" id="momo404" />
            </div>
        );
    }
}

export default Page404;
