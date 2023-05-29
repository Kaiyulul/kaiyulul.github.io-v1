import React from "react";
import "../styles/Intro.css";
// import Terrain from "./Terrain.js";

class Intro extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: true,
            activeKey: "1",
            visible: true
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
        this.setState({
            activeKey: eventKey
        });
    }
    render() {
        return (
            <div id="intro">
                <div className="intro-description fade">
                    {"howdy! I am"}
                </div>
                <div className="intro-name fade">
                    <span data-value="Kyle Tandoc"> {"Kyle Tandoc"} </span>
                </div>
                <div className="intro-description fade">
                    {"I am currently building my web portfolio using Create React. This is mostly a testing ground and a fun project while I am gradwaiting and unemployed, but please check out what I have so far!"}
                </div>
                {/* <Terrain /> */}
            </div>
        )
    }
}

export default Intro;