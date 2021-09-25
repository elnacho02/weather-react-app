import React from 'react';
import "./About.css";
import coverVideo from "../media/video (1).mp4";
function About() {
    return (
        <div className="about-container">
            <div>
                <h5>hola</h5>
            </div>
            <div>
                <div className="video-container2">
                    <video src={coverVideo} autoPlay loop muted></video>
                </div>
                <div className="footer-container">
                    <a href="https://elnacho02.github.io/portfolio-responsive/"><h2>My Portfolio</h2></a>
                </div>
            </div>
        </div>
    )
}

export default About
