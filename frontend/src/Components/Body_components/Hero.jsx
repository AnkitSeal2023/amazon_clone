import React from "react";

export default function Hero() {
    function getUrlParameter(name)
    {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }
    const userName = getUrlParameter('username');
    function scrollLeft() {
        document.getElementById("hero-section3-carousel").scrollLeft -= 500;
    }
    function scrollRighT() {
        document.getElementById("hero-section3-carousel").scrollLeft += 200;
    }

    async function addToCart(productID) {
        console.log("username=",userName);
        console.log("product ID:", productID);
        try{
            await fetch(`/updatecart/`, {
            method:"PATCH",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({productID:`${productID}`, userName:`${userName}`})
           });
        }
        catch(error){
            alert("Connection error in cart");
            console.log("error in addtocart:", error);
        }
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
                            <li className="hero-cards2-imgs">
                                <a className="hero-cards2-img-container" href="/">
                                    <img src="/images/hero-card2_1.jpg" alt="img" />
                                </a>
                                <div id="hero-cards2-text1">Tablets</div>
                            </li>
                            <li className="hero-cards2-imgs">
                                <a className="hero-cards2-img-container" href="/">
                                    <img src="/images/hero-card2_2.jpg" alt="img" />
                                </a>
                                <div id="hero-cards2-text2">Mice</div>
                            </li>
                            <li className="hero-cards2-imgs">
                                <a className="hero-cards2-img-container" href="/">
                                    <img src="/images/hero-card2_3.jpg" alt="img" />
                                </a>
                                <div id="hero-cards2-text3">SSDs</div>
                            </li>
                            <li className="hero-cards2-imgs">
                                <a className="hero-cards2-img-container" href="/">
                                    <img src="/images/hero-card2_4.jpg" alt="img" />
                                </a>
                                <div id="hero-cards2-text4">Laptop bags</div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li id="hero-element3">
                    <div id="hero-cards3-container">
                        <div id="hero-cards3-heading">Starting Rs149 | Headphones</div>
                        <ul id="hero-cards3-main-content">
                            <li className="hero-cards3-imgs">
                                <a className="hero-cards3-img-container" href="/">
                                    <img src="/images/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg" alt="img" />
                                </a>
                                <div id="hero-cards3-text1">Starting Rs149 | boAt</div>
                            </li>
                            <li className="hero-cards3-imgs">
                                <a className="hero-cards3-img-container" href="/">
                                    <img src="/images/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg" alt="img" />
                                </a>
                                <div id="hero-cards3-text2">Starting Rs249 | boult</div>
                            </li>
                            <li className="hero-cards3-imgs">
                                <a className="hero-cards3-img-container" href="/">
                                    <img src="/images/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg" alt="img" />
                                </a>
                                <div id="hero-cards3-text3">Starting Rs349 | Noise</div>
                            </li>
                            <li className="hero-cards3-imgs">
                                <a className="hero-cards3-img-container" href="/">
                                    <img src="/images/PC_QuadCard_Zeb_0.5x_1._SY116_CB570220221_.jpg" alt="img" />
                                </a>
                                <div id="hero-cards3-text4">Starting Rs649 | Zebronics</div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li id="hero-element4">
                    <div id="hero-cards3-container">
                        <div id="hero-cards3-heading">Appliances for your home | Up to 55% off</div>
                        <ul id="hero-cards3-main-content">
                            <li className="hero-cards3-imgs">
                                <a className="hero-cards3-img-container" href="/">
                                    <img src="/images/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" alt="img" />
                                </a>
                                <div id="hero-cards3-text1">Air conditioners</div>
                            </li>
                            <li className="hero-cards3-imgs">
                                <a className="hero-cards3-img-container" href="/">
                                    <img src="/images/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" alt="img" />
                                </a>
                                <div id="hero-cards3-text2">Refrigerators</div>
                            </li>
                            <li className="hero-cards3-imgs">
                                <a className="hero-cards3-img-container" href="/">
                                    <img src="/images/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" alt="img" />
                                </a>
                                <div id="hero-cards3-text3">Microwaves</div>
                            </li>
                            <li className="hero-cards3-imgs">
                                <a className="hero-cards3-img-container" href="/">
                                    <img src="/images/186x116---wm._SY116_CB667322346_.jpg" alt="img" />
                                </a>
                                <div id="hero-cards3-text4">Washing machines</div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <div id="hero-section2">
                <div>Up to 60% off | Unique products from local stores nearby</div>
                <ul id="hero-section2-carousel">
                    <li>
                        <div className="hero-section2-carousel-elements" >
                            <img src="/images/hero-card2_1.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section2-carousel-elements" >
                            <img src="/images/hero-card2_1.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section2-carousel-elements" >
                            <img src="/images/hero-card2_1.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section2-carousel-elements" >
                            <img src="/images/hero-card2_1.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section2-carousel-elements" >
                            <img src="/images/hero-card2_1.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section2-carousel-elements" >
                            <img src="/images/hero-card2_1.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section2-carousel-elements" >
                            <img src="/images/hero-card2_1.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section2-carousel-elements" >
                            <img src="/images/hero-card2_1.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section2-carousel-elements" >
                            <img src="/images/hero-card2_1.jpg" />
                        </div>
                    </li>
                </ul>
            </div>
            <div id="hero-section3">
                <div>Up to 40% off | Inverter batteries | From local stores nearby</div>
                <button onClick={()=>scrollLeft()} className="hero-section-left-button hero-section-button">← </button>
                <button onClick={()=>scrollRighT()} className="hero-section-button hero-section-right-button"> →</button>
                <ul id="hero-section3-carousel">
                    <li>
                        <div className="hero-section3-carousel-elements" >
                            <img src="/images/hero-section2_cards.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section3-carousel-elements" >
                            <img src="/images/hero-section2_cards.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section3-carousel-elements" >
                            <img src="/images/hero-section2_cards.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section3-carousel-elements" >
                            <img src="/images/hero-section2_cards.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section3-carousel-elements" >
                            <img src="/images/hero-section2_cards.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section3-carousel-elements" >
                            <img src="/images/hero-section2_cards.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section3-carousel-elements" >
                            <img src="/images/hero-section2_cards.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section3-carousel-elements" >
                            <img src="/images/hero-section2_cards.jpg" />
                        </div>
                    </li>
                    <li>
                        <div className="hero-section3-carousel-elements" >
                            <img src="/images/hero-section2_cards.jpg" />
                        </div>
                    </li>
                </ul>
            </div>
            <ul id="hero-section4">
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
                            <li className="hero-cards2-imgs">
                                <a className="hero-cards2-img-container" href="/">
                                    <img src="/images/hero-card2_1.jpg" alt="img" />
                                </a>
                                <div id="hero-cards2-text1">Tablets</div>
                            </li>
                            <li className="hero-cards2-imgs">
                                <a className="hero-cards2-img-container" href="/">
                                    <img src="/images/hero-card2_2.jpg" alt="img" />
                                </a>
                                <div id="hero-cards2-text2">Mice</div>
                            </li>
                            <li className="hero-cards2-imgs">
                                <a className="hero-cards2-img-container" href="/">
                                    <img src="/images/hero-card2_3.jpg" alt="img" />
                                </a>
                                <div id="hero-cards2-text3">SSDs</div>
                            </li>
                            <li className="hero-cards2-imgs">
                                <a className="hero-cards2-img-container" href="/">
                                    <img src="/images/hero-card2_4.jpg" alt="img" />
                                </a>
                                <div id="hero-cards2-text4">Laptop bags</div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li id="hero-element3">
                    <div id="hero-cards3-container">
                        <div id="hero-cards3-heading">Starting Rs149 | Headphones</div>
                        <ul id="hero-cards3-main-content">
                            <li className="hero-cards3-imgs">
                                <a className="hero-cards3-img-container" href="/">
                                    <img src="/images/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg" alt="img" />
                                </a>
                                <div id="hero-cards3-text1">Starting Rs149 | boAt</div>
                            </li>
                            <li className="hero-cards3-imgs">
                                <a className="hero-cards3-img-container" href="/">
                                    <img src="/images/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg" alt="img" />
                                </a>
                                <div id="hero-cards3-text2">Starting Rs249 | boult</div>
                            </li>
                            <li className="hero-cards3-imgs">
                                <a className="hero-cards3-img-container" href="/">
                                    <img src="/images/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg" alt="img" />
                                </a>
                                <div id="hero-cards3-text3">Starting Rs349 | Noise</div>
                            </li>
                            <li className="hero-cards3-imgs">
                                <a className="hero-cards3-img-container" href="/">
                                    <img src="/images/PC_QuadCard_Zeb_0.5x_1._SY116_CB570220221_.jpg" alt="img" />
                                </a>
                                <div id="hero-cards3-text4">Starting Rs649 | Zebronics</div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li id="hero-element4">
                    <div id="hero-cards3-container">
                        <div id="hero-cards3-heading">Appliances for your home | Up to 55% off</div>
                        <ul id="hero-cards3-main-content">
                            <li className="hero-cards3-imgs">
                                <a className="hero-cards3-img-container" href="/">
                                    <img src="/images/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" alt="img" />
                                </a>
                                <div id="hero-cards3-text1">Air conditioners</div>
                            </li>
                            <li className="hero-cards3-imgs">
                                <a className="hero-cards3-img-container" href="/">
                                    <img src="/images/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" alt="img" />
                                </a>
                                <div id="hero-cards3-text2">Refrigerators</div>
                            </li>
                            <li className="hero-cards3-imgs">
                                <a className="hero-cards3-img-container" href="/">
                                    <img src="/images/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" alt="img" />
                                </a>
                                <div id="hero-cards3-text3">Microwaves</div>
                            </li>
                            <li className="hero-cards3-imgs">
                                <a className="hero-cards3-img-container" href="/">
                                    <img src="/images/186x116---wm._SY116_CB667322346_.jpg" alt="img" />
                                </a>
                                <div id="hero-cards3-text4">Washing machines</div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
            <div className="test"> 
                <div> test component </div>
                <div>Product id : 1002</div>
                <div>Product name : Wireless Mouse</div>
                <button className="add-cart" onClick={()=>addToCart(1003)}> Add to cart </button>
            </div>
        </>
    );
}
