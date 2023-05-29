import React from "react";
import "../styles/AboutMe.css";
// import Observer from "./Observer.js";

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
        const current = (
            <p>
                I'm a graduating Computer Science student with a specialization in Data Science and Analytics from the Ateneo De Manila University. I have also dived into other disciplines in full-stack development, blockchain architecture, and artificial intelligence during my stay in college.
            </p>
        );

        const hobbies = (
            <p>
                Back in college, I used to dance with the Company of Ateneo Dancers (CADs) and have kept myself busy contributing to the organization. In my free time, I love to make gourmet-esque food in the middle of the night and watch scary movies even when they terrify me. I am also a casual gamer from genres ranging from FPS, RTS, Tower Defence, and more. 
            </p>
        );

        const text = [
            current,
            hobbies,
            hobbies,
            current,
        ];

        const textMap = text.map(text => <span>{text}</span>)

        return (
            <div id="about">
                <div className="about-content">
                    <div className="about-title"> &lt;about me&gt; </div>
                    <div className="about-description">
                        {textMap}
                    </div>
                    {/* <div className="about-image">
                        <img src={"/assets/creativeshot.jpg"} alt=""/>
                    </div> */}
                </div>
                <div className="about-image">
                    <img src={"/assets/creativeshot.jpg"} alt=""/>
                </div>
            </div>
            
        )
    }
}

export default Intro;