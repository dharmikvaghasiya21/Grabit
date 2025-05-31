import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Loginpage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3030/login', {
                email,
                password
            });

            if (response.status === 200) {
                alert("Login successful!");
                navigate("/");
            }
        } catch (error) {
            alert("Invalid email or password. Please try again.");
        }
    };

    return (
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
                                    <form onSubmit={handleLogin}>
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
                                            <li>
                                                <label>Password*</label>
                                                <input
                                                    type="password"
                                                    placeholder="Enter your password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                            </li>
                                        </ul>
                                        <label><Link to="/forgot">Forgot Password?</Link></label>
                                        <div className="login_bottom">
                                            <span><Link to="/Register">Create Account?</Link></span>
                                            <button type="submit">Login</button>
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

export default Loginpage;
