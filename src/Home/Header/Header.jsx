import React from 'react'
import { LuBadgePercent } from "react-icons/lu";
import { MdOutlineAddLocation } from "react-icons/md";
import { Link } from 'react-router-dom';
// import Toggle from './Toggle';

const Header = () => {
    // only 991px to down media apply in javascript
    const subMenu = (e) => {
        e.preventDefault();
        if (window.innerWidth <= 991) {
            const data = e.target.closest("li").querySelector("#data");
            if (data.style.display === "" || data.style.display === "none") {
                data.style.display = "block";
            } else {
                data.style.display = "none";
            }
        }
    }

    const menu = (e) =>{
        e.preventDefault();
        const data = e.target.closest("li").querySelector("#data1");
        if (data.style.display === "" || data.style.display === "none") {
            data.style.display = "block";
        } else {
            data.style.display = "none";
        }
}

    //  open and close menu bar java script

    function openMenu() {
        document.getElementById("sideMenu").style.display = "block";
    }

    function closeMenu() {
        document.getElementById("sideMenu").style.display = "none";
    }
    // all categories  
    function showMenu(menuId) {
        document.getElementById('dairyBakery').classList.remove('active');
        document.getElementById('fruitsVegetable').classList.remove('active');
        document.getElementById('snackspice').classList.remove('active');
        document.getElementById('juicedrinks').classList.remove('active');


        document.getElementById(menuId).classList.add('active');
    }

    // location javascript
    function toggleDropdown() {
        document.getElementById("dropdown").classList.toggle("show");
    }

    function selectLocation(location) {
        document.getElementById("selectelocation").innerText = location;
        document.getElementById("dropdown").classList.remove("show");
    }
    window.onclick = function (e) {
        if (!e.target.matches('.box') && !e.target.closest('.box')) {
            document.getElementById("dropdown").classList.remove("show");
        }
    }
    return (
        <>
            <div className="header">
                <div className="header_top">
                    <div className="container">
                        <div className="header_top_inner">
                            <div className="top_text_left">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i class="fa-solid fa-phone-volume"></i>
                                        </a>
                                        <span>+91 987 654 3210</span>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i class="fa-brands fa-whatsapp"></i>
                                        </a>
                                        <span>+91 987 654 3210</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="top_icon_right">
                                <ul>
                                    <li>
                                        <a href="#"><i class="fa-regular fa-user"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa-regular fa-heart"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i class="fa-solid fa-bag-shopping"></i></a>
                                    </li>
                                    <li onClick={() => { openMenu() }}>
                                        <a href="#"><i class="fa-solid fa-bars"></i></a>
                                    </li>

                                </ul>
                            </div>

                            <div className="top_text_center">
                                <div className="message">World`s Fastest Online Shopping Destination</div>
                            </div>
                            <div className="top_text_right">
                                <ul>
                                    <li>
                                        <a href="#">Help?</a>
                                    </li>
                                    <li>
                                        <a href="#">Track Order?</a>
                                    </li>
                                    <li onClick={menu}>
                                        <a href="#">English<i class="fa-solid fa-chevron-down"></i></a>
                                        <ul className="dropdown_menu" id='data1'>
                                            <li>English</li>
                                            <li>Italiano</li>
                                        </ul>
                                    </li>
                                    <li onClick={menu}>
                                        <a href="#">Dollar<i class="fa-solid fa-chevron-down"></i></a>
                                        <ul className="dropdown_menu" id='data1'>
                                            <li>USD $</li>
                                            <li>EUR €</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile_menu" id="sideMenu">
                    <div className="mobile_menu_inner">
                        <div className="menu_title">
                            <p>My Menu</p>
                            <button onClick={() => { closeMenu() }}>×</button>
                        </div>
                        <div className="row">
                            <ul>
                                <li>
                                    <a href="/" onClick={subMenu}>Home</a>
                                    <span></span>
                                    <ul id="data">
                                        <li>
                                            <a href="#">Grocery</a>
                                        </li>
                                        <li>
                                            <a href="#">Fashion</a>
                                        </li>
                                        <li>
                                            <a href="#">Fashion 2</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/" onClick={subMenu}>Categories</a>
                                    <span></span>
                                    <ul id="data">
                                        <li>
                                            <a href="#" onClick={subMenu}>classic variation</a>
                                            <span></span>
                                            <ul id="data">
                                                <li>
                                                    <a href="#">Product Left Sidebar</a>

                                                </li>
                                                <li>
                                                    <a href="#">Product Right Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#" onClick={subMenu}>classic variation</a>
                                            <span></span>
                                            <ul id="data">
                                                <li>
                                                    <a href="#">Left Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="#">Right Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Product full width</a>
                                        </li>
                                        <li>
                                            <a href="#">accordion full width</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/" onClick={subMenu}>Products</a>
                                    <span></span>
                                    <ul id="data">
                                        <li>
                                            <a href="#" onClick={subMenu}>Product Page</a>
                                            <span></span>
                                            <ul id="data">
                                                <li>
                                                    <a href="#">Product Left Sidebar</a>

                                                </li>
                                                <li>
                                                    <a href="#">Product Right Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#" onClick={subMenu}>Product According</a>
                                            <span></span>
                                            <ul id="data">
                                                <li>
                                                    <a href="#">Left Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="#">Right Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Product full width</a>
                                        </li>
                                        <li>
                                            <a href="#">accordion full width</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/" onClick={subMenu}>Blog</a>
                                    <span></span>
                                    <ul id="data">
                                        <li>
                                            <a href="#">Left Sidebar</a>
                                        </li>
                                        <li>
                                            <a href="#">Right Sidebar</a>
                                        </li>
                                        <li>
                                            <a href="#">Full width</a>
                                        </li>
                                        <li>
                                            <a href="#">Detail Left sidebar</a>
                                        </li>
                                        <li>
                                            <a href="#">Detail Right sidebar</a>
                                        </li>
                                        <li>
                                            <a href="#">Detail Full width</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" onClick={subMenu}>Pages</a>
                                    <span></span>
                                    <ul id="data">
                                        <li>
                                            <a href="#">About Us</a>
                                        </li>
                                        <li>
                                            <a href="#">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="#">Cart</a>
                                        </li>
                                        <li>
                                            <a href="#">Chackout</a>
                                        </li>
                                        <li>
                                            <a href="#">Orders</a>
                                        </li>
                                        <li>
                                            <a href="#">Compare</a>
                                        </li>
                                        <li>
                                            <a href="#">FAQ</a>
                                        </li>
                                        <li>
                                            <a href="#">Login</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <ul className="icon">
                                <li>
                                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                                    <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="header_middle">
                    <div className="container">
                        <div className="row">
                            <div className="logo">
                                <a href="/">
                                    <img src="assets\img\logo\logo.png" alt="logo" />
                                </a>
                            </div>
                            <div className="middle_text_center">
                                <div className="middle_text_center_inner">
                                    <form action="#">
                                        <input type="text" placeholder="Search Products..." />
                                        <button><i class="fa-solid fa-magnifying-glass"></i></button>
                                    </form>
                                </div>
                            </div>
                            <div className="middle_text_left">
                                <div className="row">
                                    <div className="item">
                                        <div className="item_inner">
                                            <div className="icon">
                                                <i class="fa-regular fa-user">
                                                    <ul className="dropdown">
                                                        <li><a href="/Register">Register</a></li>
                                                        <li><a href="#">Checkout</a></li>
                                                        <li><a href="/login">Login</a></li>
                                                    </ul>
                                                </i>
                                                <div className="text">
                                                    <p>Account</p>
                                                    <span>LOGIN</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item_inner">
                                            <div className="icon">
                                                <i class="fa-regular fa-heart"></i>
                                                <div className="text">
                                                    <p>Wishlist</p>
                                                    <span>3-ITEMS</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="item_inner">
                                            <div className="icon">
                                                <i class="fa-solid fa-bag-shopping"></i>
                                                <div className="text">
                                                    <p>Cart</p>
                                                    <span>3-ITEMS</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header_bottom">
                    <div className="container">
                        <div className="nevbar">
                            <div className="categories_menu">
                                <div className="categories_inner">
                                    <div className="box">
                                        <i class="fa-solid fa-table-cells-large"></i>
                                        <span>All Categories</span>
                                        <i class="fa-solid fa-chevron-down"></i>
                                    </div>
                                    <div className="dropdown">
                                        <div className="dropdown_inner">
                                            <div className="item">
                                                <ul>
                                                    <li>
                                                        <button onClick={() => showMenu("dairyBakery")}>
                                                            <i class="ri-cake-3-line"></i>
                                                            Dairy & Bakery
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button onClick={() => showMenu("fruitsVegetable")}>
                                                            <i class="ri-cake-3-line"></i>
                                                            Fruits & Vegetable
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button onClick={() => showMenu("snackspice")}>
                                                            <i class="ri-cake-3-line"></i>
                                                            Snack & Spice
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button onClick={() => showMenu("juicedrinks")}>
                                                            <i class="ri-cake-3-line"></i>
                                                            Juice & Drinks
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="item" id="dairyBakery">
                                                <div className="row">
                                                    <div className="col">
                                                        <p>Dairy</p>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Cauliflower</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Bell Peppers</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Broccoli</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">cabbage</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">tommato</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col">
                                                        <p>Bakery</p>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Cake And Pastry</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Rusk Toast</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Bread & Buns</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Chocolate Brownie</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Cream Roll</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item" id="fruitsVegetable">
                                                <div className="row">
                                                    <div className="col">
                                                        <p>Fruits</p>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Cauliflower</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">bell peppers</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">broccoli</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">cabbage</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">tomato</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col">
                                                        <p>Vegetable</p>
                                                        <ul>
                                                            <li>
                                                                <a href="#">Cauliflower</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">bell peppers</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">broccoli</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">cabbage</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">tomato</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item" id="snackspice">
                                                <div className="row">
                                                    <div className="col">
                                                        <p>snacks</p>
                                                        <ul>
                                                            <li>
                                                                <a href="#">french fries</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">potato</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">Biscuits & cokkies</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">popcorn</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">rice cakes</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col">
                                                        <p>spaice</p>
                                                        <ul>
                                                            <li>
                                                                <a href="#">clnnamon powder</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">cumin powder</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">fenugreek powder</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">pepper powder</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">long pepper</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item" id="juicedrinks">
                                                <div className="row">
                                                    <div className="col">
                                                        <p>juice</p>
                                                        <ul>
                                                            <li>
                                                                <a href="#">mango juice</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">coconut water</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">tetra juices</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">apple juices</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">lychee juice</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col">
                                                        <p>Vegetable</p>
                                                        <ul>
                                                            <li>
                                                                <a href="#">breizh cole</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">green cola</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">jolt cola</a>
                                                            </li>
                                                            <li>
                                                                <a href="#">mechha cola</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main_menu">
                                <div className="main_menu_inner">
                                    <ul className="row">
                                        <li>
                                            <a href="#">Home<i class="fa-solid fa-chevron-down"></i></a>
                                            <ul className="sub_menu">
                                                <li>
                                                    <a href="#">Grocery</a>
                                                </li>
                                                <li>
                                                    <a href="#">Fashion</a>
                                                </li>
                                                <li>
                                                    <a href="#">Fashion 2</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Categories<i class="fa-solid fa-chevron-down"></i></a>
                                            <div className="big_sub_menu">
                                                <div className="row">
                                                    <div className="col">
                                                        <p>Classic</p>
                                                        <ul>
                                                            <li><a href="#">Left Sider 3 Column</a></li>
                                                            <li><a href="#">Left Sider 3 Column</a></li>
                                                            <li><a href="#">Left Sider 3 Column</a></li>
                                                            <li><a href="#">Left Sider 3 Column</a></li>
                                                            <li><a href="#">Left Sider 3 Column</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col">
                                                        <p>Classic</p>
                                                        <ul>
                                                            <li><a href="#">Left Sider 3 Column</a></li>
                                                            <li><a href="#">Left Sider 3 Column</a></li>
                                                            <li><a href="#">Left Sider 3 Column</a></li>
                                                            <li><a href="#">Left Sider 3 Column</a></li>
                                                            <li><a href="#">Left Sider 3 Column</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col">
                                                        <p>Classic</p>
                                                        <ul>
                                                            <li><a href="#">Left Sider 3 Column</a></li>
                                                            <li><a href="#">Left Sider 3 Column</a></li>
                                                            <li><a href="#">Left Sider 3 Column</a></li>
                                                            <li><a href="#">Left Sider 3 Column</a></li>
                                                            <li><a href="#">Left Sider 3 Column</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="col">
                                                        <p>Classic</p>
                                                        <ul>
                                                            <li><a href="#">Left Sider 3 Column</a></li>
                                                            <li><a href="#">Left Sider 3 Column</a></li>
                                                            <li><a href="#">Left Sider 3 Column</a></li>
                                                            <li><a href="#">Left Sider 3 Column</a></li>
                                                            <li><a href="#">Left Sider 3 Column</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#">Products<i class="fa-solid fa-chevron-down"></i></a>
                                            <ul className="sub_menu">
                                                <li>
                                                    <a href="#">Product Page<i class="fa-solid fa-chevron-right"></i></a>
                                                    <ul className="sub_menu_child">
                                                        <li>
                                                            <a href="/Product">Product Left Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Product Right Sidebar</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Product According<i class="fa-solid fa-chevron-right"></i></a>
                                                    <ul className="sub_menu_child">
                                                        <li>
                                                            <a href="#">Left Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">Right Sidebar</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="#">Product full width</a>
                                                </li>
                                                <li>
                                                    <a href="#">accordion full width</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Blog<i class="fa-solid fa-chevron-down"></i></a>
                                            <ul className="sub_menu">
                                                <li>
                                                    <a href="#">Left Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="#">Right Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="#">Full width</a>
                                                </li>
                                                <li>
                                                    <a href="#">Detail Left sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="#">Detail Right sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="#">Detail Full width</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">Pages<i class="fa-solid fa-chevron-down"></i></a>
                                            <ul className="sub_menu">
                                                <li>
                                                    <a href="#">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="/Contact">Contact Us</a>
                                                </li>
                                                <li>
                                                    <a href="#">Cart</a>
                                                </li>
                                                <li>
                                                    <a href="#">Chackout</a>
                                                </li>
                                                <li>
                                                    <a href="#">Orders</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <LuBadgePercent /> Offers
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                            <div className="location_menu">
                                <div className="location_inner">
                                    <button className="box" onClick={() => { toggleDropdown() }}>
                                        <i class="fa-solid fa-location-dot"></i>
                                        <span id='selectelocation'>New York</span>
                                        <i class="fa-solid fa-chevron-down"></i>
                                    </button>
                                    <div className="droplist" id="dropdown">
                                        <div className="droplist_inner">
                                            <ul>
                                                <li onClick={() => { selectLocation("Current Location") }}>
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    <span>Current Location</span>
                                                </li>
                                                <li onClick={() => { selectLocation("Los Angeles") }}>
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    <span>Los Angeles</span>
                                                </li>
                                                <li onClick={() => { selectLocation("chicago") }}>
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    <span>chicago</span>
                                                </li>
                                                <li onClick={() => { selectLocation("houston") }}>
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    <span>houston</span>
                                                </li>
                                                <li onClick={() => { selectLocation("phoenix") }}>
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    <span>phoenix</span>
                                                </li>
                                                <li onClick={() => { selectLocation("san diego") }}>
                                                    <i class="fa-solid fa-location-dot"></i>
                                                    <span>san diego</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Header