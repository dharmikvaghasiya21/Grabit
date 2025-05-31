import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Forgot = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleforgot = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3030/login', {
                email
            });

            if (response.status === 200) {
                alert("Forgiting successful!");
                navigate("/"); 
            }
        } catch (error) {
            alert("Invalid email or password. Please try again.");
            navigate("/login")
        }
    };

    return (
        <div className="register_contant">
            <div className="container">
                <div className="register_conatant_inner">
                    <div className="section_title">
                        <h2>Forgot Password</h2>
                        <p>Enter your email & set password, We send you link.</p>
                    </div>
                    <div className="login_contant">
                        <div className="login_contant_inner">
                            <div className="item">
                                <div className="item_inner">
                                    <form onSubmit={handleforgot}>
                                        <ul>
                                            <li>
                                                <label>Email*</label>
                                                <input
                                                    type="email"
                                                    placeholder="Enter your email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </li>
                                        </ul>
                                        <div className="login_bottom">
                                            <button type="submit">Forgot</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item_inner">
                                    <div className="images">
                                        <img src="assets/img/Loginpage/login.png" alt="Login" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Forgot;
