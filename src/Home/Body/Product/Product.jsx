import React, { useEffect, useState } from "react";
import Productitem from "./Productitem";

const Product = () => {
    const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // Initial time in seconds

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);

        if (timeLeft <= 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timeLeft]);

    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = seconds > 0 ? String(seconds).padStart(2, '0') : "--"; // Display "--" for seconds when 0

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    };

    return (
        <>
            <div className="product">
                <div className="container">
                    <div className="product_inner">
                        <div className="title">
                            <div className="container">
                                <div className="title_inner">
                                    <div className="text">
                                        <h2>Day of the <span>deal</span></h2>
                                        <p>Don`t wait. The time will never be just right.</p>
                                    </div>
                                    <div className="time">
                                        <p>25<span>Days</span>{formatTime(timeLeft)}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <Productitem mainimg="assets/img/product/6_1.jpg" hoverimg="assets/img/product/6_2.jpg" flags="SALE" title="Mixed Nuts Berries Pack" price="$45.00" oldprice="$56.00" category="Dried Fruits" />
                            <Productitem mainimg="assets/img/product/3_1.jpg" hoverimg="assets/img/product/3_2.jpg" flags="SALE" title="Multi Grain Combo Cookies" price="$25.00" oldprice="$30.00" category="Cookies" />
                            <Productitem mainimg="assets/img/product/9_1.jpg" hoverimg="assets/img/product/9_2.jpg" flags="SALE" title="Fresh Mango Juice Park" price="$46.00" oldprice="$65.00" category="Foods" />
                            <Productitem mainimg="assets/img/product/2_1.jpg" hoverimg="assets/img/product/2_2.jpg" flags="SALE" title="Dates value Fresh Pouch" price="$78.00" oldprice="$85.00" category="Dried Fruits" />
                            <Productitem mainimg="assets/img/product/1_1.jpg" hoverimg="assets/img/product/1_2.jpg" flags="NEW" title="Stick Fiber Masala Magic" price="$45.00" oldprice="$50.00" category="Foods" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product; 