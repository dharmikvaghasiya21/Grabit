import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Body from "./Body/Body";
import { Productpage } from "../Product-Page/Productpage";
import Register from "../Register/Register";
import Loginpage from "../Login/Loginpage.jsx";
import Contactpage from "../Contact/Contactpage.jsx";
import Popup from "./Popup.jsx";



const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer); // Clean up the timer
    }, []);

    if (loading) {
        return (
            <span class="loader"></span>
        );
    }

    return (
        <>
            <Popup/>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/Product" element={<Productpage />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Login" element={<Loginpage />} />
                    <Route path="/Contact" element={<Contactpage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default Home;