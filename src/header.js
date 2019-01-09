import React, { Component } from 'react';
import './App.scss';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pagenumber: this.props.pagenum,
            togglestat: 0,
            menuli: ["active", "", "", ""],
            menudot: ["menudot active", "menudot", "menudot", "menudot"],
            aclass: ["activemenu menua", "menua", "menua", "menua"]
        }
        this.menulist = {
            "Work": "work",
            "Fun": "fun",
            "Fine Art": "FA",
            "About/Contact": "contact",
        }
        this.keylist = ["Work", "Fun", "Fine Art", "About/Contact"]
    }

    //update menu style(state) based on the current page
    senddata(e) {
        let newpage = e.target.id;
        this.props.menustatus(newpage);

        let menuli = this.state.menuli;
        let menudot = this.state.menudot;
        let aclass = this.state.aclass;
        let curpage = this.state.pagenumber;
        menuli[curpage] = ""
        menudot[curpage] = "menudot"
        aclass[curpage] = "menua"
        menuli[newpage] = "active"
        menudot[newpage] = "menudot active"
        aclass[newpage] = "activemenu menua"
        this.setState({ pagenumber: newpage, menuli: menuli, menudot: menudot, aclass: aclass, togglestat: 0 })

    }

    //menu generator
    headergenerator() {
        let element = [];

        for (let i = 0; i < 4; i++) {
            element.push(
                <li id={this.menulist[this.keylist[i]]} key={"menuli" + i} className={this.state.menuli[i]}>
                    <div className={this.state.menudot[i]} key={"menudot" + i} />
                    <a className={this.state.aclass[i]} key={"menua" + i} id={i} onClick={this.senddata.bind(this)}>{this.keylist[i]}</a>
                </li>
            );
        }
        return (element);
    }

    render() {

        return (
            <div className="header-wrap">
                <div className="header">

                    <div id="nav-icon" key="nav-icon" className={this.state.togglestat == 0 ? ' ' : 'open'} onClick={(ev) => this.setState({ togglestat: !(this.state.togglestat) })}>
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className={this.state.togglestat == 0 ? 'menu-wrap' : 'menu-wrap open'} key="menu-wrap">
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
