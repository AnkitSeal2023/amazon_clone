import React from "react";
import Slides from "./Body_components/Slides.jsx";
import Hero from "./Body_components/Hero.jsx";
import "../Styles/LandingPage/Body/slideshow.css";
import "../Styles/LandingPage/Body/hero-content.css";
export default function Body() {
    return (
        <div id="main-body">
            <div id="slide-container"><Slides /></div>
            <div id="hero-container">
                <Hero />
            </div>

        </div>
    );
}