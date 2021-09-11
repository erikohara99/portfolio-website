import React, { Component } from 'react';

class Header extends Component {
    render() { 
        return ( 
            <div id="header">
                <p>Erik O'Hara</p>
                <div id = "links">
                    <ul>
                        <li><a href="https://github.com/SlicedBlu"><span>GitHub</span></a></li>
                        <li><a href="https://www.linkedin.com/in/erik-ohara/"><span>LinkedIn</span></a></li>
                        <li><a href="https://drive.google.com/file/d/1JKiEBVlSm4D8q1ApK6JpFTaj-cuLk_bp/view"><span>Resume</span></a></li>
                    </ul>
                </div>
                <a href="mailto:erikmohara@gmail.com" id="button">Contact Me</a>
            </div>
        );
    }
}
 
export default Header;