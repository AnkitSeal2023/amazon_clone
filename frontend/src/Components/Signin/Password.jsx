import React from "react";
import "../../Styles/Password.css";

export default function Password() {
    const [isIncorrectPass, setIsIncorrectPass] = React.useState(false);
    async function checkPass() {
        let data;
        const userPassword = document.getElementById("password").value;
        const email = new URLSearchParams(window.location.search).get("email");
        try {
            data = await fetch(`/checkPassword?email=${encodeURIComponent(email)}&password=${encodeURIComponent(userPassword)}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" }
            })
        }
        catch (error) {
            console.log("error:", error);
        }
        data = await data.json();
        console.log("data:", data);
        if (data.status == 200) {
            console.log("password is correct");
            const token = data.token;
            document.cookie = `USER_DETAIL = ${token}`;
            document.cookie = `USER_NAME = ${data.username}`;
            // window.location.href = `http://localhost:5173?username=${encodeURIComponent(data.username)}`;
            window.location.href = `http://localhost:5173`;
        }
        else if (data.status == 404) {
            console.log("password is incorrect");
            document.getElementById("password").value = "";
            setIsIncorrectPass(true);
        }
    }
    return (
        <div className="password-container">
            <nav id="navbar1">
                <a id="amazon-logo" href="/">
                    <div id="amazon-ico" href="/"></div>
                    <div id="logo-in">.in</div>
                </a>
            </nav>
            <div className="password">
                <div className="password-line1">Enter Password</div>
                <div className="password-input-field">
                    <label htmlFor="password" className="password-input-label">Password:</label>
                    <input type="password" id="password" className="password-input" placeholder="Enter your password" />
                </div>
                <div className="password-continue" onClick={checkPass}>Continue</div>
                {isIncorrectPass && <div className="password-incorrect">ⓘIncorrect password. Try again</div>}
                <div className="password-amazon-tnc">By continuing, you agree to Amazon's <a href="/">Conditions of Use</a> and <a href="/">Privacy Notice</a>.</div>
            </div>
        </div>
    );
}