import React from "react";

export default function Slides() {
    return (
        <div id="slideshow">
            <div id="slideshow-container">
                <div id="slides">
                    <div className="slides" id="slide0"></div>
                    <div className="slides" id="slide1"></div>
                    <div className="slides" id="slide2"></div>
                    <div className="slides" id="slide3"></div>
                    <div className="slides" id="slide4"></div>
                    <div className="slides" id="slide5"></div>
                    <div className="slides" id="slide6"></div>
                </div >
            </div>
            <div id="slide-fade"></div>
            <button id="slides-left-button" className="slides-button">
                <div id="slides-left-button-ico-container">
                    <div id="slides-left-button-ico"></div>
                </div>
            </button>
            <button id="slides-right-button" className="slides-button">
                <div id="slides-right-button-ico-container">
                    <div id="slides-right-button-ico"></div>
                </div>
            </button >
        </div>

    );
}