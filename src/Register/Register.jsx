import React from "react";

const Register = () => {
    return (
        <>
            <div className="product_page_row">
                <div className="container">
                    <div className="product_page_inner">
                        <div className="item">
                            <div className="item_inner">
                                <h2>Register Page</h2>
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
                                        <a href="#">Register Page</a>
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
                    <div className="section_title">
                        <h2>Register</h2>
                        <p>Best place to buy and sell digital products.</p>
                    </div>
                    <div className="register_contant_row">
                        <div className="register_contant_row_inner">
                            <div className="item">
                                <div className="item_inner">
                                    <form>
                                        <ul>
                                            <li>
                                                <label>First Name*</label>
                                                <input type="text" placeholder="Enter your First name" />
                                            </li>
                                            <li>
                                                <label>Last Name*</label>
                                                <input type="text" placeholder="Enter your last name" />
                                            </li>
                                            <li>
                                                <label>Email*</label>
                                                <input type="email" placeholder="Enter your email add...e" />
                                            </li>
                                            <li>
                                                <label>Phone Number*</label>
                                                <input type="text" placeholder="Enter your phone number" />
                                            </li>
                                            <li>
                                                <label>Password*</label>
                                                <input type="password" placeholder="Enter your passworde" />
                                            </li>
                                            <li>
                                                <label>Conform Password*</label>
                                                <input type="password" placeholder="Enter your Conform passworde" />
                                            </li>
                                            <li>
                                                <label>Address</label>
                                                <input type="text" placeholder="Address Line 1" />
                                            </li>
                                            <li>
                                                <label>Country *</label>
                                                <select name="Country" placeholder="Country">
                                                    <option >Country</option>
                                                    <option>Afghanistan</option>
                                                    <option>Aland Islands</option>
                                                    <option>France</option>
                                                    <option>Finland</option>
                                                    <option>Ethiopia</option>
                                                    <option>Afghanistan</option>
                                                </select>
                                            </li>
                                            <li>
                                                <label>Region State</label>
                                                <select placeholder="Region/State">
                                                    <option>Region/State</option>
                                                </select>
                                            </li>
                                            <li>
                                                <label>City *</label>
                                                <select placeholder="City" name="City">
                                                    <option>City</option>
                                                </select>
                                            </li>
                                            <li>
                                                <label>Post Code</label>
                                                <input type="text" placeholder="Post Codee" />
                                            </li>
                                        </ul>
                                        <div className="form_bottom">
                                            <span>Already have an account?<a href="#"> Login</a></span>
                                            <button>Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Register;