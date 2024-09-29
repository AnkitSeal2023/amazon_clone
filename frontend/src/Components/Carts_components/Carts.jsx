import React, { useState, useEffect } from "react";
import StripeCheckout from 'react-stripe-checkout'
// import Navbar1_main from "../Navbar1_components/Navbar1_main";
// import "../../Styles/LandingPage/Navbar.css"
import "../../Styles/CartPage.css"
export default function Carts(props) {
    const APP_KEY = import.meta.env.VITE_STRIPE_PUBLISH_KEY

    const [cartItems, setCartItems] = useState([]);
    const [productNames, setProductNames] = useState([]);
    const [total, setTotal] = useState(0);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        getCartItems();
    }, []);
    const makePayment = (token) => {
        const body = {
            token,
            cart
        }
        const headers = {
            "Content-Type": "application/json"
        }
        return fetch(`http://localhost:5000/payment`, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }).then(response => {
            console.log("RESPONSE", response)
            const { status } = response
            console.log("STATUS", status)
        })
            .catch(err => console.log(err))
    }
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
    let token = getUserDetails();
    if (!token) {
        window.location.href = `/signin.html`
    }
    let [cart, setCart] = useState({
        name: "full cart",
        price: total,
        productBy: "amazon",
        userDetailsJWT : token
    })
    const getCartItems = async () => {
        try {
            const response = await fetch(`/cart`, {
                method: "PUT",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    token: `${token}`,
                }),
            });
            const data = await response.json();
            const cartItems = data.cart;
            const totalPrice = data.total;
            var productNames = data.products;
            console.log(data);
            setTotal(totalPrice)
            setCart(prevCart => ({
                ...prevCart,
                price: totalPrice
            }))
            setProductNames(Array.isArray(productNames) ? productNames : []);
            setCartItems(Array.isArray(cartItems) ? cartItems : []);
        } catch (error) {
            console.log("Error fetching cart data:", error);
            setError(error);
        }
    };

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            {/* <Navbar1_main/> */}
            <div className="main-cart">
                <div>No. of items in cart: {cartItems.length}</div>
                <div>
                    Cart items:
                    {cartItems.map((item, index) => (
                        <div key={index}>
                            <div>{`${productNames[index]}`}</div>
                        </div>
                    ))}
                </div>
                <div>
                    Total cost : {`${total}`}
                </div>
                <StripeCheckout
                    stripeKey={`${APP_KEY}`}
                    token={makePayment}
                    name='Buy Your Cart'>
                    <button className='btn-large blue'>Proceed to pay Rs. {`${total}`}</button>
                </StripeCheckout>
            </div>
        
        </>
    );
}