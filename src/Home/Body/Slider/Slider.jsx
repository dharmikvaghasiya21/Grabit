import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    // useEffect(() => {
    //     AOS.init({
    //         duration: 1000,
    //     });
    // }, []);
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={{ delay: 2000 }}
                spaceBetween={50}
                loop={true}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            ></Swiper>
            <div className="main_slider">
                <div className="container">
                    <div className="slider_inner">
                        <div className="slider_item">
                            <div className="slider_item_inner">
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                    autoplay={{ delay: 2000 }}
                                    spaceBetween={50}
                                    loop={true}
                                    slidesPerView={1}
                                    // navigation
                                    pagination={{ clickable: true }}
                                    // scrollbar={{ draggable: true }}
                                >
                                    <SwiperSlide className='slider'>
                                        <img src="assets\img\Banner\banner 01.jpg" alt="" width={1200} height={500} />
                                        <div className="text" >
                                            <div data-aos="fade-up">
                                                <span>starting at $29.99</span>
                                                <div className="heading">
                                                    Organic & healthy vegetables
                                                </div>
                                                <button>Shop now <i class="fa-solid fa-angles-right"></i></button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='slider'>
                                        <img src="assets\img\Banner\banner 02.jpg" alt="" width={1200} height={500} />
                                        <div className="text" >
                                            <div data-aos="fade-up">
                                                <span>starting at $29.99</span>
                                                <div className="heading">
                                                    Organic & healthy vegetables
                                                </div>
                                                <button>Shop now <i class="fa-solid fa-angles-right"></i></button>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                {/* <div className="carousel-item">
                                    <img src="assets/img/banner/banner 01.jpg" className="d-block w-100" alt="..." />
                                    <div className="text">
                                        <div data-aos="fade-up" data-bs-interval="2000">
                                            <span>starting at $20.00</span>
                                            <div className="heading">
                                                Explore fresh & juicy fruits
                                            </div>
                                            <button>Shop now</button>
                                        </div>
                                    </div>
                                </div> */}

                            </div>

                        </div>
                    </div>
                </div >
            </div >
        </>

    )
}

export default Slider
