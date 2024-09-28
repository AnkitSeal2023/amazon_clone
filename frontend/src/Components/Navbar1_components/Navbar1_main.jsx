import React from "react";
import Nav1_location from "./Nav1_location.jsx"
import Nav1_SearchBar from "./Nav1_SearchBar.jsx"
import Nav1_AccountDetails from "./Nav1_AccountDetails.jsx"
import Nav1_Orders from "./Nav1_Orders.jsx"
import Nav1_cart from "./Nav1-cart.jsx";
export default function Navbar1_main() {
    const [locationData, setLocationData] = React.useState("")
    React.useEffect(() => {
        async function getlocationData() {
            const requestOptions = {
                method: "GET",
                redirect: "follow"
            };

            try {
                const response = await fetch("http://ip-api.com/json/", requestOptions);
                const result = await response.json();
                setLocationData(result);
            } catch (error) {
                console.error(error);
            }
        }
        getlocationData();
    }, [])

    const userName = getUrlParameter('username');
    
    function getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
    
    return (
        <div id="navbar1">
            <a id="amazon-logo" href="/">
                <div id="amazon-ico" href="/"></div>
                <div id="logo-in">.in</div>
            </a>
            <Nav1_location location={locationData}/>
            <Nav1_SearchBar />
            <div id="nav-country-code">
                {locationData ? locationData.countryCode : "N.A"}
            </div>
            <Nav1_AccountDetails user={userName} />
            <Nav1_Orders />
            <Nav1_cart userName={userName} />
        </div>
    )
}