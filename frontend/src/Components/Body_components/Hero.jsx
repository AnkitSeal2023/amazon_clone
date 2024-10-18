import React from "react";

export default function Hero() {
    function getUrlParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
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
    const userJWT = getUserDetails();
    const userName = getUrlParameter('username');
    function scrollLeft() {
        document.getElementById("hero-section3-carousel").scrollLeft -= 500;
    }
    function scrollRighT() {
        document.getElementById("hero-section3-carousel").scrollLeft += 200;
    }

    async function addToCart(productID) {
        console.log("username=", userName);
        console.log("product ID:", productID);
        try {
            await fetch(`/updatecart/`, {
                method: "PATCH",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ productID: `${productID}`, userJWT: `${userJWT}` })
            });
        }
        catch (error) {
            alert("Connection error in cart");
            console.log("error in addtocart:", error);
        }
    }

    function productUrl(productID) {
        window.location.href = `http://localhost:5173/products/${productID}`
    }

    return (
        <>
            <ul id="hero-section1">
                <li id="hero-cards1">
                    <div id="hero-cards1-heading">
                        Great Freedom Sale | Coming soon
                    </div>
                    <div id="hero-cards1-img">
                        <img src="/images/FreedomSale.jpg" alt="Freedom Sale" />
                    </div>
                    <div id="hero-cards1-link">
                        <a href="/" id="hero-cards1-link">Join prime</a>
                    </div>
                </li>
                <li id="hero-cards2">
                    <div id="hero-cards2-container">
                        <div id="hero-cards2-heading">Categories to explore</div>
                        <ul id="hero-cards2-main-content">
                            <div className="hero-cards-line">
                                <li className="hero-cards2-imgs">
                                    <a className="hero-cards2-img-container" onClick={() => productUrl(2001)}>
                                        <img src="/images/hero-card2_1.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards2-text1">Tablets</div>
                                </li>
                                <li className="hero-cards2-imgs">
                                    <a className="hero-cards2-img-container" onClick={() => productUrl(2002)}>
                                        <img src="/images/hero-card2_2.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards2-text2">Mice</div>
                                </li>
                            </div>
                            <div className="hero-cards-line">
                                <li className="hero-cards2-imgs">
                                    <a className="hero-cards2-img-container" onClick={() => productUrl(2003)}>
                                        <img src="/images/hero-card2_3.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards2-text3">SSDs</div>
                                </li>
                                <li className="hero-cards2-imgs">
                                    <a className="hero-cards2-img-container" onClick={() => productUrl(2004)}>
                                        <img src="/images/hero-card2_4.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards2-text4">Laptop bags</div>
                                </li>
                            </div>
                        </ul>
                    </div>
                </li>
                <li id="hero-element3">
                    <div id="hero-cards3-container">
                        <div id="hero-cards3-heading">Starting Rs149 | Headphones</div>
                        <ul id="hero-cards3-main-content">
                            <div className="hero-cards-line">
                                <li className="hero-cards3-imgs">
                                    <a className="hero-cards3-img-container" onClick={() => productUrl(2005)}>
                                        <img src="/images/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards3-text1">Starting Rs149 | boAt</div>
                                </li>
                                <li className="hero-cards3-imgs">
                                    <a className="hero-cards3-img-container" onClick={() => productUrl(2006)}>
                                        <img src="/images/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards3-text2">Starting Rs249 | boult</div>
                                </li>
                            </div>
                            <div className="hero-cards-line">
                                <li className="hero-cards3-line2-imgs">
                                    <a className="hero-cards3-img-container" onClick={() => productUrl(2007)}>
                                        <img src="/images/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards3-text3">Starting Rs349 | Noise</div>
                                </li>
                                <li className="hero-cards3-line2-imgs">
                                    <a className="hero-cards3-img-container" onClick={() => productUrl(2008)}>
                                        <img src="/images/PC_QuadCard_Zeb_0.5x_1._SY116_CB570220221_.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards3-text4">Starting Rs649 | Zebronics</div>
                                </li>
                            </div>
                        </ul>
                    </div>
                </li>
                <li className="hero-element4">
                    <div id="hero-cards4-container">
                        <div id="hero-cards3-heading">Appliances for your home | Up to 55% off</div>
                        <ul id="hero-cards3-main-content">
                            <div className="hero-cards-line">
                                <li className="hero-cards3-imgs">
                                    <a className="hero-cards3-img-container" onClick={() => productUrl(2009)}>
                                        <img src="/images/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards3-text1">Air conditioners</div>
                                </li>
                                <li className="hero-cards3-imgs">
                                    <a className="hero-cards3-img-container" onClick={() => productUrl(2010)}>
                                        <img src="/images/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards3-text2">Refrigerators</div>
                                </li>
                            </div>
                            <div className="hero-cards-line">
                                <li className="hero-cards3-imgs">
                                    <a className="hero-cards3-img-container" onClick={() => productUrl(2011)}>
                                        <img src="/images/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards3-text3">Microwaves</div>
                                </li>
                                <li className="hero-cards3-imgs">
                                    <a className="hero-cards3-img-container" onClick={() => productUrl(2012)}>
                                        <img src="/images/186x116---wm._SY116_CB667322346_.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards3-text4">Washing machines</div>
                                </li>
                            </div>
                        </ul>
                    </div>
                </li>
            </ul>
            <div id="hero-section2">
                <div>Up to 60% off | Unique products from local stores nearby</div>
                <ul id="hero-section2-carousel">
                    <li>
                        <div className="hero-section2-carousel-elements" onClick={() => productUrl(2013)}>
                            <img src="/images/hero-card2_1.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section2-carousel-elements" onClick={() => productUrl(2014)}>
                            <img src="/images/hero-card2_1.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section2-carousel-elements" onClick={() => productUrl(2015)}>
                            <img src="/images/hero-card2_1.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section2-carousel-elements" onClick={() => productUrl(2016)}>
                            <img src="/images/hero-card2_1.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section2-carousel-elements" onClick={() => productUrl(2017)}>
                            <img src="/images/hero-card2_1.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section2-carousel-elements" onClick={() => productUrl(2018)}>
                            <img src="/images/hero-card2_1.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section2-carousel-elements" onClick={() => productUrl(2019)}>
                            <img src="/images/hero-card2_1.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section2-carousel-elements" onClick={() => productUrl(2020)}>
                            <img src="/images/hero-card2_1.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section2-carousel-elements" onClick={() => productUrl(2021)}>
                            <img src="/images/hero-card2_1.jpg" />
                        </div>
                    </li>
                </ul>
            </div>
            <div id="hero-section3">
                <div>Up to 40% off | Inverter batteries | From local stores nearby</div>
                <ul id="hero-section3-carousel">
                    <li>
                        <div className="hero-section3-carousel-elements" onClick={() => productUrl(2022)}>
                            <img src="/images/hero-section2_cards.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section3-carousel-elements" onClick={() => productUrl(2023)}>
                            <img src="/images/hero-section2_cards.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section3-carousel-elements" onClick={() => productUrl(2024)}>
                            <img src="/images/hero-section2_cards.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section3-carousel-elements" onClick={() => productUrl(2025)}>
                            <img src="/images/hero-section2_cards.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section3-carousel-elements" onClick={() => productUrl(2026)}>
                            <img src="/images/hero-section2_cards.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section3-carousel-elements" onClick={() => productUrl(2027)}>
                            <img src="/images/hero-section2_cards.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section3-carousel-elements" onClick={() => productUrl(2028)}>
                            <img src="/images/hero-section2_cards.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section3-carousel-elements" onClick={() => productUrl(2029)}>
                            <img src="/images/hero-section2_cards.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section3-carousel-elements" onClick={() => productUrl(2030)}>
                            <img src="/images/hero-section2_cards.jpg" />
                        </div>
                    </li>
                </ul>
            </div>
            <ul id="hero-section1">
                <li id="hero-cards1">
                    <div id="hero-cards1-heading">
                        Great Freedom Sale | Coming soon
                    </div>
                    <div id="hero-cards1-img">
                        <img src="/images/FreedomSale.jpg" alt="Freedom Sale" />
                    </div>
                    <div id="hero-cards1-link">
                        <a href="/" id="hero-cards1-link">Join prime</a>
                    </div>
                </li>
                <li id="hero-cards2">
                    <div id="hero-cards2-container">
                        <div id="hero-cards2-heading">Categories to explore</div>
                        <ul id="hero-cards2-main-content">
                            <div className="hero-cards-line">
                                <li className="hero-cards2-imgs">
                                    <a className="hero-cards2-img-container" onClick={() => productUrl(2001)}>
                                        <img src="/images/hero-card2_1.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards2-text1">Tablets</div>
                                </li>
                                <li className="hero-cards2-imgs">
                                    <a className="hero-cards2-img-container" onClick={() => productUrl(2002)}>
                                        <img src="/images/hero-card2_2.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards2-text2">Mice</div>
                                </li>
                            </div>
                            <div className="hero-cards-line">
                                <li className="hero-cards2-imgs">
                                    <a className="hero-cards2-img-container" onClick={() => productUrl(2003)}>
                                        <img src="/images/hero-card2_3.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards2-text3">SSDs</div>
                                </li>
                                <li className="hero-cards2-imgs">
                                    <a className="hero-cards2-img-container" onClick={() => productUrl(2004)}>
                                        <img src="/images/hero-card2_4.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards2-text4">Laptop bags</div>
                                </li>
                            </div>
                        </ul>
                    </div>
                </li>
                <li id="hero-element3">
                    <div id="hero-cards3-container">
                        <div id="hero-cards3-heading">Starting Rs149 | Headphones</div>
                        <ul id="hero-cards3-main-content">
                            <div className="hero-cards-line">
                                <li className="hero-cards3-imgs">
                                    <a className="hero-cards3-img-container" onClick={() => productUrl(2005)}>
                                        <img src="/images/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards3-text1">Starting Rs149 | boAt</div>
                                </li>
                                <li className="hero-cards3-imgs">
                                    <a className="hero-cards3-img-container" onClick={() => productUrl(2006)}>
                                        <img src="/images/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards3-text2">Starting Rs249 | boult</div>
                                </li>
                            </div>
                            <div className="hero-cards-line">
                                <li className="hero-cards3-line2-imgs">
                                    <a className="hero-cards3-img-container" onClick={() => productUrl(2007)}>
                                        <img src="/images/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards3-text3">Starting Rs349 | Noise</div>
                                </li>
                                <li className="hero-cards3-line2-imgs">
                                    <a className="hero-cards3-img-container" onClick={() => productUrl(2008)}>
                                        <img src="/images/PC_QuadCard_Zeb_0.5x_1._SY116_CB570220221_.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards3-text4">Starting Rs649 | Zebronics</div>
                                </li>
                            </div>
                        </ul>
                    </div>
                </li>
                <li className="hero-element4">
                    <div id="hero-cards4-container">
                        <div id="hero-cards3-heading">Appliances for your home | Up to 55% off</div>
                        <ul id="hero-cards3-main-content">
                            <div className="hero-cards-line">
                                <li className="hero-cards3-imgs">
                                    <a className="hero-cards3-img-container" onClick={() => productUrl(2009)}>
                                        <img src="/images/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards3-text1">Air conditioners</div>
                                </li>
                                <li className="hero-cards3-imgs">
                                    <a className="hero-cards3-img-container" onClick={() => productUrl(2010)}>
                                        <img src="/images/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards3-text2">Refrigerators</div>
                                </li>
                            </div>
                            <div className="hero-cards-line">
                                <li className="hero-cards3-imgs">
                                    <a className="hero-cards3-img-container" onClick={() => productUrl(2011)}>
                                        <img src="/images/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards3-text3">Microwaves</div>
                                </li>
                                <li className="hero-cards3-imgs">
                                    <a className="hero-cards3-img-container" onClick={() => productUrl(2012)}>
                                        <img src="/images/186x116---wm._SY116_CB667322346_.jpg" alt="img" />
                                    </a>
                                    <div id="hero-cards3-text4">Washing machines</div>
                                </li>
                            </div>
                        </ul>
                    </div>
                </li>
            </ul>
            {/* <div className="test">
                <div> test component </div>
                <div>Product id : 1002</div>
                <div>Product name : Wireless Mouse</div>
                <button className="add-cart" onClick={() => addToCart(2005)}> Add to cart </button>
            </div> */}
        </>
    );
}
