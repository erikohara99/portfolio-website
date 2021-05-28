import React, { Component } from 'react';

class Header extends Component {
    render() { 
        return ( 
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Erik O'Hara</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <a class="nav-link" href="#">About Me</a>
                        <a class="nav-link" href="#">Education/Certifications</a>
                        <a class="nav-link" href="#">Projects</a>
                    </div>
                    </div>
                </div>
            </nav>
        );
    }
}
 
export default Header;