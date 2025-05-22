import React from "react";

const Serviceitem = (props) => {
    return(
        <>
            <div className="item">
                <div className="item_inner">
                    <div className="service_img">
                    {props.icon}
                    </div>
                    <div className="service_text">
                        <p>{props.handing}</p>
                        <span>{props.handingtext}</span>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Serviceitem;