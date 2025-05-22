import React from "react";
import { GoHeart } from "react-icons/go";
import { IoEyeOutline } from "react-icons/io5";
import { LuRepeat } from "react-icons/lu";
import { CiShoppingBasket } from "react-icons/ci";

const Arrivals_item = (props) => {
    return (
        <>
            <div className="item">
                <div className="item_inner">
                    <div className="image">
                        <img className="main_img" src={props.mainimg} alt="Productimg" />
                        <img className="hover_img" src={props.hoverimg} alt="Productimg" />
                        <div className="hover_button">
                            <ul>
                                <li><a href="#"><GoHeart className="i" /></a></li>
                                <li><a href="#"><IoEyeOutline className="i" /></a></li>
                                <li><a href="#"><LuRepeat className="i" /></a></li>
                                <li><a href="#"><CiShoppingBasket className="i" /></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flags">
                        <span>{props.flags}</span>
                    </div>
                    <div className="text">
                        <a href="#">{props.category}</a>
                        <div className="pro_title">
                            <a href="#">{props.title}</a>
                        </div>
                        <ul className="pro_rating">
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                        </ul>
                        <div className="pro_price">
                            <div className="new_price">
                                <span>{props.price}</span>
                            </div>
                            <div className="old_price">
                                <span><s>{props.oldprice}</s></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Arrivals_item;