import React from "react";
import './hero.css';

const Hero = () => {
    return(
        <section className="hero">
            <img src="./images/Group 77.png" alt="" className="collage" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero;