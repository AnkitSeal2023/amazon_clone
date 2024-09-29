import React from 'react'
import ReactDOM from 'react-dom/client'
import Carts from './Components/Carts_components/Carts'
import Navbar1_main from './Components/Navbar1_components/Navbar1_main'
import "./Styles/LandingPage/Navbar.css"
import "../src/index.css"
ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
    <>
        <Navbar1_main/>
        <Carts />
    </>  </React.StrictMode>)
    