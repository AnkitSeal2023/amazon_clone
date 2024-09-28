import React, { useState, useEffect } from "react";

export default function Carts(props) {
    const [cartItems, setCartItems] = useState([]);
    const [productNames, setProductNames] = useState([]);
    const [total, setTotal] = useState(0);
    const [error, setError] = useState(null);
    useEffect(() => {
        getCartItems();
    }, []);
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
    let token =  getUserDetails();
    if(!token)
    {
        window.location.href = `/signin.html`
    }
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
            const cartItems =  data.cart;
            const totalPrice = data.total;
            var productNames = data.products;
            console.log(data);
            setTotal(totalPrice)
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
            <button>
                Check-Out!
            </button>
        </>
    );
}