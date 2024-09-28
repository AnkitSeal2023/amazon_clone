import React from "react";
import "../../Styles/Signin.css";
export default function Signin() {
    async function checkEmail()
    {
        let data;
        const userEmail= document.getElementById("email").value;
        try{
           data = await fetch(`/checkEmail?email=${encodeURIComponent(userEmail)}`, {
                method:"GET",
                headers:{"Content-Type":"application/json"}
            })
            data = await data.json();
        }
        catch(error)
        {
            console.log("error:", error);
        }
        if(data.status == 200){
            console.log("user with this email exists")
            window.location.href = `/Password.html?email=${encodeURIComponent(userEmail)}`;
        }
        else if(data.status == 404){
            console.log("user doesnot exist");
        }
    }
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
                <div className="signin-continue" onClick={checkEmail}>Continue</div>
                <div className="signin-amazon-tnc">By continuing, you agree to Amazon's <a href="/">Conditions of Use</a> and <a href="/">Privacy Notice</a>.</div>
            </div>
        </div>
    )
}