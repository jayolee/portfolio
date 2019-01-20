import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import './App.scss';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pagenumber:0,
            togglestat: 0,
            menuli: ["active", "", "", ""],
            menudot: ["menudot active", "menudot", "menudot", "menudot"],
            aclass: ["activemenu menua", "menua", "menua", "menua"]
        }
        this.menulist = {
            "Projects": ["projects", "project"],
            "Fun": ["fun", "fun"],
            "Fine Art": ["FA", "fineart"],
            "About/Contact": ["contact", "about"]
        }
        this.keylist = ["Projects", "Fun", "Fine Art", "About/Contact"]
    }
    componentDidMount(){
        this.getCurPage();
    }
    getCurPage(){
        let curpagePath=this.props.location.pathname;
        curpagePath=curpagePath.toLowerCase();
        
        let urlList=['/projects', '/fun', '/fineart', '/about']
        let newpage=0;
        let urlRegex;
        for(let i=0; i<urlList.length; i++){
            urlRegex = new RegExp(urlList[i]);
            if(urlRegex.exec(curpagePath)){
                this.setState({pagenumber:i});
                newpage=i;
            }
        }
        
        let newid=newpage;
        let menuli = ["", "", "", ""];
        let menudot = ["menudot", "menudot", "menudot", "menudot"];
        let aclass = ["menua", "menua", "menua", "menua"];
        menuli[newid] = "active"
        menudot[newid] = "menudot active"
        aclass[newid] = "activemenu menua"
        this.setState({ menuli: menuli, menudot: menudot, aclass: aclass, togglestat: 0 })
        
    }
    //update menu style(state) when menu is clicked
    updateStyle(newid){
        let menuli = ["", "", "", ""];
        let menudot = ["menudot", "menudot", "menudot", "menudot"];
        let aclass = ["menua", "menua", "menua", "menua"];
        menuli[newid] = "active"
        menudot[newid] = "menudot active"
        aclass[newid] = "activemenu menua"
        this.setState({ menuli: menuli, menudot: menudot, aclass: aclass, togglestat: 0 })
    }
    //menu generator
    headergenerator() {
        let element = [];
        let menuUrl = '/';
        for (let i = 0; i < 4; i++) {
            menuUrl = process.env.PUBLIC_URL + '/' + this.menulist[this.keylist[i]][1];  //Set the url depends on the menu
            element.push(
                <li id={this.menulist[this.keylist[i]][0]} key={"menuli" + i} className={this.state.menuli[i]}>
                    <div className={this.state.menudot[i]} key={"menudot" + i} />
                    <Link to={menuUrl} className={this.state.aclass[i]} key={"menua" + i} id={i} onClick={(ev)=> {this.setState({pagenumber: i}); this.updateStyle(i)}}>{this.keylist[i]}</Link>
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

export default withRouter(Header);
