import React from "react";
import "../../Styles/Signup.css";
export default function Signup() {
    const [userEmail, setUserEmail] = React.useState("");
    const [userPass, setUserPass] = React.useState("");
    
    let userData = { userMail : userEmail, userPassword:userPass };
    async function handleUserData(){
        try{
            const checkEmailResponse = await fetch(`https://emailvalidation.abstractapi.com/v1/?api_key=API_KEY&email=${userEmail}`);
            const emailResult = await checkEmailResponse.JSON;
            console.log(emailResult);
            if(emailResult.deliverability==="DELIVERABLE"){
                uploadUserData();
            }
            else
                alert("Email adress is invalid");
        }
        catch(error)
        {
            console.log("handle user data error: " , error);
            alert("Connecton failed");
        }
    }
    async function uploadUserData() {
        try {
            const signupResponse = await fetch("/api/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData)
            });
            const result = await signupResponse.json();
            if (result.ok) {
                alert("Account creation Successful");
            }
            else{
                alert("Account creation failed");
            }
        }
            catch (error) {
            console.log("Error:", error);
        };  
    };

    return (
        <div className="signin-container">
            <nav id="navbar1">
                <a id="amazon-logo" href="/">
                    <div id="amazon-ico" href="/"></div>
                    <div id="logo-in">.in</div>
                </a>
            </nav>
            <div className="signin">
                <div className="signin-line1">Create account</div>
                <div className="signin-email-input-field">
                    <label htmlFor="email" className="signin-input-label">Enter your email:</label>
                    <input type="email" id="email" className="signin-input" placeholder="johndoe@gmail.com" onChange={(e) => setUserEmail(e.target.value)} />
                </div>
                <div className="signin-email-input-field">  
                    <label htmlFor="email" className="signin-input-label">Enter your password:</label>
                    <input type="text" id="email" className="signin-input" placeholder="123456" onChange={(e) => setUserPass(e.target.value)} />
                </div>
                <button className="signin-continue" onClick={() => handleUserData()}><div>Continue</div></button>
                <div className="signin-amazon-tnc">By continuing, you agree to Amazon's <a href="/">Conditions of Use</a> and <a href="/">Privacy Notice</a>.</div>
            </div>
        </div>
    )
}
