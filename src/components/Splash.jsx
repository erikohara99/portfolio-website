import React, { Component } from 'react';
import face_image from "../resources/face.png";

class Splash extends Component {
    render() { 
        return (
            <div id="splash">
                <h1>Erik O'Hara</h1>
                <h2>Working Towards Excellence</h2>
                <img src={face_image} alt="Erik O'Hara"></img>
            </div>
        );
    }
}
 
export default Splash;