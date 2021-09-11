import React from 'react';

import Website from '../resources/portfolio_website.jpg';
import Refriends from '../resources/refriends.png';
import TeamUp from '../resources/teamup.gif';

const Portfolio = () => {
    return ( 
        <div id="portfolio">
            <h1 className="header" >Portfolio</h1>
            <div className="project">
                <a href="https://github.com/SlicedBlu/refriends">Refriends</a>
                <div className="project-info">
                    <img src={Refriends} alt="Input box for posts and comments, and all current posts rendered at bottom"></img>
                    <h2>Refriends is an interactive social media website that boasts anonymity! Users can choose any nickname they'd like as well as any post body. When they send a post, their name, post date, and post body are added to the ever-growing database of posts! Users can then reply with comments to any posts anonymously.</h2>
                </div>
            </div>
            <div className="project">
                <a href="/">Portfolio Website</a>
                <div className="project-info">
                    <img src={Website} alt="This portfolio website!"></img>
                    <h2>You're on it! This beautiful website was created using HTML, CSS, and JavaScript, with the REACT framework for the front-end rendering. Components, Node modules, and an in-house stylesheet were all created to bring you one of my favorite projects.</h2>
                </div>
            </div>
            <div className="project">
                <a href="https://github.com/SlicedBlu/teamup">TeamUp!</a>
                <div className="project-info">
                    <img src={TeamUp} alt="Character and item selection for TeamUp!"></img>
                    <h2>TeamUp! is a website made to create and review character builds for the game, League of Legends. This React app contains stateful components and API calls using both Node and Express for a back-end server, and Axios calls in the front-end.</h2>
                </div>
            </div>
        </div>
     );
}
 
export default Portfolio;