import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const [address, setAddress] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [image, setimage] = useState(null);

    const handleRegister = (e) => {
        e.preventDefault();

        if (password !== cpassword) {
            return alert("Password and Confirm Password do not match.");
        }

        const userData = { name, lname, email, number, password, address, country, state, city, pincode,image};

        axios.post("http://localhost:3030/register", userData)
            .then((res) => {
                alert(res.data.message);
                navigate("/login");
            })
            .catch((err) => {
                console.error("Error:", err);
                alert("Registration failed. Try again.");
            });
    };

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
                                    <li><Link to="/">Home</Link></li>
                                    <i className="fa-solid fa-angle-right"></i>
                                    <li><Link to="/register">Register Page</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
                                    <form onSubmit={handleRegister}>
                                        <ul>
                                            <li>
                                                <label>First Name*</label>
                                                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your first name" />
                                            </li>
                                            <li>
                                                <label>Last Name*</label>
                                                <input type="text" required value={lname} onChange={(e) => setLname(e.target.value)} placeholder="Enter your last name" />
                                            </li>
                                            <li>
                                                <label>Email*</label>
                                                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                                            </li>
                                            <li>
                                                <label>Phone Number*</label>
                                                <input type="text" required value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Enter your phone number" />
                                            </li>
                                            <li>
                                                <label>Password*</label>
                                                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                                            </li>
                                            <li>
                                                <label>Confirm Password*</label>
                                                <input type="password" required value={cpassword} onChange={(e) => setCPassword(e.target.value)} placeholder="Confirm your password" />
                                            </li>
                                            <li>
                                                <label>Address</label>
                                                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Address Line 1" />
                                            </li>
                                            <li>
                                                <label>Country*</label>
                                                <select value={country} onChange={(e) => setCountry(e.target.value)} required>
                                                    <option value="">Select Country</option>
                                                    <option>India</option>
                                                    <option>Aland Islands</option>
                                                    <option>France</option>
                                                    <option>Finland</option>
                                                    <option>USA</option>
                                                    <option>UK</option>
                                                </select>
                                            </li>
                                            <li>
                                                <label>Region / State</label>
                                                <select value={state} onChange={(e) => setState(e.target.value)}>
                                                    <option value="">Select State</option>
                                                    <option>Gujarat</option>
                                                    <option>Goa</option>
                                                    <option>Kerala</option>
                                                    <option>Rajasthan</option>
                                                </select>
                                            </li>
                                            <li>
                                                <label>City*</label>
                                                <select value={city} onChange={(e) => setCity(e.target.value)} required>
                                                    <option value="">Select City</option>
                                                    <option>Surat</option>
                                                    <option>Ahmedabad</option>
                                                    <option>Other</option>
                                                </select>
                                            </li>
                                            <li>
                                                <label>Post Code</label>
                                                <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} placeholder="Post Code" />
                                            </li>
                                            <li>
                                                <label>Image</label>
                                                <input type="file" onChange={(e) => setimage(e.target.files[0])} />
                                            </li>
                                        </ul>
                                        <div className="form_bottom">
                                            <span>Already have an account? <Link to="/login">Login</Link></span>
                                            <button type="submit">Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
