import React from "react";



const Blogitem = (props) => {
    return(
        <>
            <div className="item">
                <div className="item_inner">
                    <div className="blog_img">
                        <img src={props.img} alt="" />
                    </div>
                    <div className="blog_text">
                        <label>{props.date} <span>{props.cat}</span></label>
                        <p><a href="#">{props.handing}</a></p>
                        <div className="more_info">
                            <a href="#">Read More<i class="fa-solid fa-angles-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blogitem;