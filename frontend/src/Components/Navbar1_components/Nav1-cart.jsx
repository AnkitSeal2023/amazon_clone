import React, { useState, useEffect } from 'react';

const Nav1_cart = () => {
  // State to store the number of items in the cart
  
  function getUserDetails() // to get "USER_DETAIL cookie"
  {
    const cookie = document.cookie;
    const cookieArray = cookie.split(';');
    for(let i=0;i<cookieArray.length;i++)
    {
      if(cookieArray[i].includes("USER_DETAIL"))
      {
        return cookieArray[i].split('=')[1];
      }
    }
    return null;
  }
  
  const [cartItems, setCartItems] = useState(0);
  const token_cookie = getUserDetails();
  useEffect(() => {
    const fetchCart = async () => {
      if (token_cookie) {
        try {
          const response = await fetch(`/cart`, {
            method: "PUT",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
              token: token_cookie,
            })
          });
          const dataCart = await response.json();
          setCartItems(dataCart.cart.length || 0);
        } catch (error) {
          console.log("Error fetching cart :", error);
        }
      }
      else
        {
            console.log("No user name provided");
        }
    };
    fetchCart();
  }, []); // Only re-fetch if props.email changes

  return (
    <a id="nav1-cart" href="/Carts.html">
      <div id="nav1-cart-ico"></div>
      <h4 id="nav1-cart-text">Cart</h4>
      <h3 id="nav1-cart-no">{cartItems}</h3>
    </a>
  );
};

export default Nav1_cart;
