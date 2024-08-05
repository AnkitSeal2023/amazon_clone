import React from "react";
import "../../Styles/Signin.css";
export default function Signin() {
    return (
        <div className="signin-container">
            <nav id="navbar1">
                <a id="amazon-logo" href="/">
                    <div id="amazon-ico" href="/"></div>
                    <div id="logo-in">.in</div>
                </a>
            </nav>
            <div className="signin">
                <div className="signin-line1">Signin or create account</div>
                <div className="signin-email-input-field">
                    <label htmlFor="email" className="signin-input-label">Enter your email:</label>
                    <input type="email" id="email" className="signin-input" placeholder="johndoe@gmail.com"/>
                </div>
                <div className="signin-continue">Continue</div>
                <div className="signin-amazon-tnc">By continuing, you agree to Amazon's <a href="/">Conditions of Use</a> and <a href="/">Privacy Notice</a>.</div>
            </div>
        </div>
    )
}