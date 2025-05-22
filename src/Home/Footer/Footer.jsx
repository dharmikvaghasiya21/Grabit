import React from "react";

const Footer = () => {
    const subMenu = (e) => {
        e.preventDefault();
        if (window.innerWidth <= 991) {
            const data = e.target.closest(".item_inner").querySelector("#data");
            if (data.style.display === "none" || data.style.display === "") {
                data.style.display = "block";
            } else {
                data.style.display = "none";
            }
        }
    }    
    return (
        <>
            <div className="footer">
                <div className="footer_top">
                    <div className="container">
                        <div className="footer_inner">
                            <div className="item">
                                <div className="item_inner">
                                    <div className="logo">
                                        <img src="assets\img\logo\logo.png" alt="logo" />
                                    </div>
                                    <div className="text">
                                        <p>Grabit is the biggest market of grocery products. Get your daily needs from our store.</p>
                                    </div>
                                    <div className="app_logo">
                                        <img src="assets\img\footer\android.png" alt="android_logo" />
                                        <img src="assets\img\footer\apple.png" alt="apple_logo" />
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item_inner">
                                    <b onClick={subMenu}>Category</b>
                                    <ul id="data">
                                        <li>
                                            <a href="#">Dried Fruit</a>
                                        </li>
                                        <li>
                                            <a href="#">Cookies</a>
                                        </li>
                                        <li>
                                            <a href="#">Foods</a>
                                        </li>
                                        <li>
                                            <a href="#">Fresh Fruit</a>
                                        </li>
                                        <li>
                                            <a href="#">Tuber Root</a>
                                        </li>
                                        <li>
                                            <a href="#">Vegetables</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item_inner">
                                    <b onClick={subMenu}>Company</b>
                                    <ul id="data">
                                        <li>
                                            <a href="#">About us</a>
                                        </li>
                                        <li>
                                            <a href="#">Delivery</a>
                                        </li>
                                        <li>
                                            <a href="#">Legal Notice</a>
                                        </li>
                                        <li>
                                            <a href="#">Terms & conditions</a>
                                        </li>
                                        <li>
                                            <a href="#">Secure payment</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item_inner">
                                    <b onClick={subMenu}>Account</b>
                                    <ul id="data">
                                        <li>
                                            <a href="#">Sign In</a>
                                        </li>
                                        <li>
                                            <a href="#">View Cart</a>
                                        </li>
                                        <li>
                                            <a href="#">Return Policy</a>
                                        </li>
                                        <li>
                                            <a href="#">Become a Vendor</a>
                                        </li>
                                        <li>
                                            <a href="#">Affiliate Program</a>
                                        </li>
                                        <li>
                                            <a href="#">Payments</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item_inner">
                                    <b onClick={subMenu}>Contact</b>
                                    <ul id="data">
                                        <li>
                                            <i class="fa-solid fa-location-dot"></i>
                                            <p>3003,Silver Business,vip circle,<br />mota varachha,surat</p>
                                        </li>
                                        <li>
                                            <i class="fa-brands fa-whatsapp"></i>
                                            <a href="#">+00 95186-45637</a>
                                        </li>
                                        <li>
                                            <i class="fa-regular fa-envelope"></i>
                                            <a href="#">abc@gmail.com</a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row">
                            <p>
                                Copyright @ <span><a href="/">Grabit</a></span> all rights reserved. Powered by Grabit.
                            </p>
                            <img src="assets\img\footer\payment cart.png" alt="paymenting"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer