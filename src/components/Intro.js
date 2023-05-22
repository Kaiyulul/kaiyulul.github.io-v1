import React from "react";
import "../styles/Intro.css";

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
                <div className="intro-description">
                    {"howdy! I am"}
                </div>
                <div className="intro-title intro-name">
                    {"KYLE TANDOC"}
                </div>
                <div className="intro-description">
                    I'm an aspiring software engineer with a background in full-stack and blockchain development, artificial intelligence, generative art, and information security. 
                </div>
            </div>
        )
    }
}

export default Intro;