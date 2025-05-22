import React from "react";

const Loginpage = () => {
    return (
        <>
            <div className="product_page_row">
                <div className="container">
                    <div className="product_page_inner">
                        <div className="item">
                            <div className="item_inner">
                                <h2>Login Page</h2>
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
                                        <a href="#">Login Page</a>
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
                            <h2>Login</h2>
                            <p>Get access to your Orders, Wishlist and<br />Recommendations.</p>
                        </div>
                        <div className="login_contant">
                            <div className="login_contant_inner">
                                <div className="item">
                                    <div className="item_inner">
                                        <form>
                                            <ul>
                                                <li>
                                                    <label>Email*</label>
                                                    <input type="email" placeholder="Enter your email add...e" />
                                                </li>
                                                <li>
                                                    <label>Password*</label>
                                                    <input type="password" placeholder="Enter your Conform passworde" />
                                                </li>
                                            </ul>
                                            <label><a href="#">Forgot Password?</a></label>
                                            <div className="login_bottom">
                                                <span><a href="#">Create Account?</a></span>
                                                <button>Login</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item_inner">
                                        <div className="images">
                                            <img src="assets\img\Loginpage\login.png" alt="Login" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loginpage;