import React from "react";

const Adbanner = () => {
    return (
        <>
            <div className="adbanner">
                <div className="container">
                    <div className="adbanner_inner">
                        <div className="banner_img">
                            <img src="assets\img\Ad_banner\ad_banner 01.jpg" alt="banner" />
                        </div>
                        <div className="banner_text">
                            <div className="heading">Fresh Fruits<br />Healthy Products</div>
                            <p>30% off sale <span>Hurry up!!!</span></p>
                            <a href="#">Shop now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Adbanner;