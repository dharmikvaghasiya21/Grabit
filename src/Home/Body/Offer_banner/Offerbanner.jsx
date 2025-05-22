import React from "react";
import Banneritem from "./Banneritem";

const Offerbanner = () => {
    return (
        <>
            <div className="offerbanner">
                <div className="container">
                    <div className="offerbanner_inner">
                        <div className="items">
                            <Banneritem img="assets\img\Ad_banner\ad_banner 02.jpg" label="70% Off" handing="Tasty Snack & Fastfood" handing_text="The flavor of something special" button_text="Shop now"/>
                            <Banneritem img="assets\img\Ad_banner\ad_banner 03.jpg" label="50% Off" handing="Fresh Fruits & veggies" handing_text="A healthy meal for every one" button_text="Shop now"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offerbanner;