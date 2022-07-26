import React from "react";

function About() {
    return (
        <div>
            <h2 className="about-me">
                Hi, I'm Shiri <span className="wave">👋</span>

            </h2>
            <div className="about-page">
                <p >I'm a Front-end/Fullstack</p>
                <p>This project is an image search engine that I have set up by the Library of Congress API.</p>
                <p>Feel free to search for any images you wish!</p>
            </div>
        </div>
    );
};

export default About;
