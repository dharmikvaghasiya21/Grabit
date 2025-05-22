import React, { useRef } from "react";
import { RiShoppingBasketLine } from "react-icons/ri";
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';




const Offerblockitem = (props) => {
    const swiperRef = useRef(null);
    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };
    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };
    return (
        <>

            <div className="product_item_inner">
                <div className="title">
                    <div className="title_inner">
                        <div className="text">
                            <h2>{props.title} <span>{props.intitle}</span></h2>
                        </div>
                        <div className="icon">
                            <i onClick={handlePrev} class="fa-solid fa-angle-left" ></i>
                            <i onClick={handleNext} class="fa-solid fa-angle-right"></i>
                        </div>
                    </div>
                </div>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    <SwiperSlide><div className="product_contant">
                        <div className="product_contant_inner">
                            <div className="item">
                                <div className="item_inner">
                                    <div className="item_img">
                                        <a href="#">
                                            <img src={props.image1} alt="product" />
                                        </a>
                                    </div>
                                    <div className="item_text">
                                        <p><a href="#">{props.lavel1}</a></p>
                                        <span>
                                            <a href="#">
                                                {props.type1}
                                            </a>
                                        </span>
                                        <div className="price">
                                            <span className="new_price">{props.price1}</span>
                                            <span className="old_price"><s>{props.oldprice1}</s></span>
                                            <div className="icon">
                                                <RiShoppingBasketLine />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item_inner">
                                    <div className="item_img">
                                        <a href="#">
                                            <img src={props.image2} alt="product" />
                                        </a>
                                    </div>
                                    <div className="item_text">
                                        <p><a href="#">{props.lavel2}</a></p>
                                        <span>
                                            <a href="#">
                                                {props.type2}
                                            </a>
                                        </span>
                                        <div className="price">
                                            <span className="new_price">{props.price2}</span>
                                            <span className="old_price"><s>{props.oldprice2}</s></span>
                                            <div className="icon">
                                                <RiShoppingBasketLine />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item_inner">
                                    <div className="item_img">
                                        <a href="#">
                                            <img src={props.image3} alt="product" />
                                        </a>
                                    </div>
                                    <div className="item_text">
                                        <p><a href="#">{props.lavel3}</a></p>
                                        <span>
                                            <a href="#">
                                                {props.type3}
                                            </a>
                                        </span>
                                        <div className="price">
                                            <span className="new_price">{props.price3}</span>
                                            <span className="old_price"><s>{props.oldprice3}</s></span>
                                            <div className="icon">
                                                <RiShoppingBasketLine />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide><div className="product_contant">
                        <div className="product_contant_inner">
                            <div className="item">
                                <div className="item_inner">
                                    <div className="item_img">
                                        <a href="#">
                                            <img src={props.image1_1} alt="product" />
                                        </a>
                                    </div>
                                    <div className="item_text">
                                        <p><a href="#">{props.lavel1_1}</a></p>
                                        <span>
                                            <a href="#">
                                                {props.type1_1}
                                            </a>
                                        </span>
                                        <div className="price">
                                            <span className="new_price">{props.price1_1}</span>
                                            <span className="old_price"><s>{props.oldprice1_1}</s></span>
                                            <div className="icon">
                                                <RiShoppingBasketLine />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item_inner">
                                    <div className="item_img">
                                        <a href="#">
                                            <img src={props.image2_1} alt="product" />
                                        </a>
                                    </div>
                                    <div className="item_text">
                                        <p><a href="#">{props.lavel2_1}</a></p>
                                        <span>
                                            <a href="#">
                                                {props.type2_1}
                                            </a>
                                        </span>
                                        <div className="price">
                                            <span className="new_price">{props.price2_1}</span>
                                            <span className="old_price"><s>{props.oldprice2_1}</s></span>
                                            <div className="icon">
                                                <RiShoppingBasketLine />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item_inner">
                                    <div className="item_img">
                                        <a href="#">
                                            <img src={props.image3_1} alt="product" />
                                        </a>
                                    </div>
                                    <div className="item_text">
                                        <p><a href="#">{props.lavel3_1}</a></p>
                                        <span>
                                            <a href="#">
                                                {props.type3_1}
                                            </a>
                                        </span>
                                        <div className="price">
                                            <span className="new_price">{props.price3_1}</span>
                                            <span className="old_price"><s>{props.oldprice3_1}</s></span>
                                            <div className="icon">
                                                <RiShoppingBasketLine />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></SwiperSlide>
                </Swiper>

            </div>

        </>
    )
}
export default Offerblockitem;