import React, { Component } from 'react';

class Header extends Component {
    render() { 
        return ( 
            <div id="header">
                <p>Erik O'Hara</p>
                <div id = "links">
                    <ul>
                        <li><a href="https://github.com/SlicedBlu">GitHub</a></li>
                        <li><a href="https://www.linkedin.com/in/erik-ohara/">LinkedIn</a></li>
                        <li><a href="https://drive.google.com/file/d/1JKiEBVlSm4D8q1ApK6JpFTaj-cuLk_bp/view">Resume</a></li>
                    </ul>
                </div>
                <p id="button">Contact Me</p>
            </div>
        );
    }
}
 
export default Header;