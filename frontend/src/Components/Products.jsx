import React, { useState, useEffect } from "react";
import Nav1_cart from "./Navbar1_components/Nav1-cart.jsx";
import { useParams } from "react-router-dom";
import "../Styles/LandingPage/Navbar.css"
import "../Styles/Products.css";

export default function Product(props) {
    function getUserDetails() // to get "USER_DETAIL cookie"
    {
        const cookie = document.cookie;
        const cookieArray = cookie.split(';');
        for (let i = 0; i < cookieArray.length; i++) {
            if (cookieArray[i].includes("USER_DETAIL")) {
                return cookieArray[i].split('=')[1];
            }
        }
        return null;
    }
    var token = getUserDetails();
    var userName = '';
    props = {
        username: "ankit_seal"
    }
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    async function addToCart(productID) {
        try {
            await fetch(`/updatecart/`, {
                method: "PATCH",
                headers: { "Content-type": "application/json" },
                // body: JSON.stringify({ productID: `${productID}`, userName: `${props.username}` })
                body: JSON.stringify({ productID: `${productID}`, token: `${token}` })
            });
        }
        catch (error) {
            alert("Connection error in cart");
            console.log("error in addtocart:", error);
        }
    }
    useEffect(() => {
        async function getProductData() {
            try {
                const response = await fetch(`/product?id=${id}`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" }
                });
                const result = await response.json();
                setData(result);
            } catch (error) {
                setError(error);
                console.log("error:", error);
            }
        }
        getProductData();
    }, [id]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!data) {
        return <div>Loading...</div>;
    }

    if (id <= 2050 && id >= 2001) {
        return (
            <>
                <nav>
                    <Nav1_cart userName={props.username} />
                </nav>
                <div className="main-content">
                    <h2>Product Name: {data.product_name}</h2>
                    <div className="product-img-container">
                        <img src={`/images/product_${id}.png`} className="product-img" alt={`Product ${id}`} />
                    </div>
                    <div className="product-details">
                        <h3>Product Description: {data.product_description}</h3>
                        <h4>Product Price: {data.product_price}</h4>
                        <h5>Product Category: {data.product_category}</h5>
                    </div>
                    <div>
                        <div className="test">
                            <div>Product id : {id}</div>
                            <button className="add-cart" onClick={() => addToCart(id)}> Add to cart </button>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return (
            <>
                <h1>Invalid Product ID</h1>
            </>
        );
    }
}