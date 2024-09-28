import React from "react"
import "../Styles/LandingPage/Navbar.css"
import Navbar1_main from "./Navbar1_components/Navbar1_main.jsx"
import Navbar2_main from "./Navbar2_components/Navbar2_main.jsx"
export default function Navbar(props) {
    return (
        <nav>
            <Navbar1_main {...props}/>
            <Navbar2_main />
        </nav>
    )
}