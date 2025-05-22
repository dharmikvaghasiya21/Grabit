import React from "react";

const Contactpage = () => {
    return (
        <>
            <div className="product_page_row">
                <div className="container">
                    <div className="product_page_inner">
                        <div className="item">
                            <div className="item_inner">
                                <h2>Contact Page</h2>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item_inner">
                                <ul>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <i class="fa-solid fa-angle-right"></i>
                                    <li>
                                        <a href="#">Contact Page</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----- */}
            <div className="register_contant">
                <div className="container">
                    <div className="register_conatant_inner">
                        <div className="section_title">
                            <h2>Get In <span>Touch</span></h2>
                            <p>Please select a topic below related to you inquiry. If<br /> you don t fint what you need, fill out our contact form.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact_page_row">
                <div className="container">
                    <div className="contact_page_row_inner">

                        <div className="item">
                            <div className="item_inner">
                                <div className="detail">
                                    <div className="icon">
                                        <i class="fa-regular fa-envelope"></i>
                                    </div>
                                    <div className="info">
                                        <strong>Mail & Website</strong>
                                        <p><i class="fa-solid fa-envelope"></i>mail.example@gmail.com</p>
                                        <p><i class="fa-solid fa-earth-americas"></i>www.yourdomain.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item_inner">
                                <div className="detail">
                                    <div className="icon">
                                        <i class="fa-solid fa-mobile-screen-button"></i>
                                    </div>
                                    <div className="info">
                                        <strong>Contact</strong>
                                        <p><i class="fa-solid fa-mobile-screen-button"></i>  (+91)-9876XXXXX</p>
                                        <p><i class="fa-solid fa-mobile-screen-button"></i>  (+91)-98576XXXXX</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item_inner">
                                <div className="detail">
                                    <div className="icon">
                                        <i class="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className="info">
                                        <strong>Address</strong>
                                        <p><i class="fa-solid fa-location-dot"></i>  Ruami Mello Moraes Filho, 987 - <br/>Salvador - MA, 40352, Brazil.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact_form">
                        <div className="item">
                            <div className="item_inner">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.9192048273308!2d72.86129967426228!3d21.233537780715622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f479e1c9a09%3A0x6727e5796da9aa!2sSkywin%20IT%20Academy%20%7C%20IT%20Institute%20in%20Surat%20%7C%20Digital%20Marketing%20Course%20%7C%20Full%20Stack%20Development%20Course%20%7C%20Computer%20Training!5e1!3m2!1sen!2sin!4v1747549326591!5m2!1sen!2sin"></iframe>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item_inner">
                                <form>
                                    <input type="text" placeholder="FULL NAME" />
                                    <input type="email" placeholder="Email" />
                                    <input type="text" placeholder="Phone" />
                                    <textarea placeholder="Message" required></textarea>
                                    <button>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactpage;