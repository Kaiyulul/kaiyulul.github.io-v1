import React from "react";
import "../styles/Socials.css";

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

class Socials extends React.Component {
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
            <div id="socials">
                <ul>
                    <a href="https://github.com/Kaiyulul">
                        <GitHubIcon style={{ color: "whitesmoke"}}/>
                    </a>
                </ul>
                <ul>
                    <a href="https://www.instagram.com/_kyletanduck/">
                        <InstagramIcon style={{ color: "whitesmoke"}}/>
                    </a>
                </ul>
                <ul>
                    <a href="https://www.instagram.com/_kyletanduck/">
                        <LinkedInIcon style={{ color: "whitesmoke"}}/>
                    </a>
                </ul>
                <ul>
                    <a className="email" href="mailto:kyle.tandoc@gmail.com">
                        <div className="a"> <EmailIcon style={{ color: "whitesmoke"}} /> </div>
                        <div className="b"> kyle.tandoc@gmail.com </div>
                    </a>
                </ul>
            </div>
        )
    }
}

export default Socials;