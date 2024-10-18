import React from "react";
export default function Nav1_AccountDetails(props) {
    function getUserName() // to get "USER_DETAIL cookie"
    {
        const cookie = document.cookie;
        const cookieArray = cookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
            if (cookieArray[i].includes("USER_NAME")) {
                return cookieArray[i].split('=')[1];
            }
        }
        return null;
    }
    const username = getUserName();
    return (
        <a href="/signin.html" id="nav1-accounts-lists">
            <h6>Hello, {(username == undefined || username == null) ? "Guest" : `${username}`}</h6>
            <div>Accounts & Lists</div>
        </a>
    )
}