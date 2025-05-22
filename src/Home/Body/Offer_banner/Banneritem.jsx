import React from "react";

const Banneritem = (props) =>{
    return(
        <>
            <div className="item">
                <div className="item_inner">
                    <div className="banner_img">
                        <img src={props.img} alt="banner" />
                    </div>
                    <div className="hover">
                        
                    </div>
                    <div className="label">{props.label}</div>
                    <div className="banner_text">
                        <p>{props.handing}</p>
                        <span>{props.handing_text}</span>
                        <a href="#">{props.button_text}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banneritem;

