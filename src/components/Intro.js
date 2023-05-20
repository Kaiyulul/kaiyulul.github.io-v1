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
                <span className="intro-title">
                    {"howdy, I'm "}
                    <span className="intro-name">
                        {"Kyle"}
                    </span>
                    {"!"}
                </span>
                <div className="intro-subtitle">
                    {/* I'm currently developing this website. */}
                </div>
                <div className="intro-description">
                    {/* I'm also currently figuring out what to do with my life. Buuuut, I have tinkered a tad bit with blockchain and full-stack development, artifical intelligence, generative art, and information security. */}
                    Sexy Man Boy Chauffeur. Proficient Stack Overflow user. Seasoned Orodomop practitioner. ChatGPT’s best friend. 17-time TED-Ed Riddle solver.
                </div>
            </div>
        )
    }
}

export default Intro;