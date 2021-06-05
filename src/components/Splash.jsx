import React, { Component } from 'react';
import face_image from "../resources/face.png";

class Splash extends Component {
    render() { 
        return (
            <React.Fragment>
                <div id="splash">
                    <img src={face_image} alt="Erik O'Hara"></img>
                    <span class = "empty_space"></span>
                    <div id="splash_text">
                        <h1>Erik O'Hara</h1>
                        <h2>Working Towards Excellence</h2>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Splash;