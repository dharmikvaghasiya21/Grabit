import React from 'react'
import Header from '../Home/Header/Header'

import { GiGrapes } from "react-icons/gi";
import { LiaCookieSolid } from "react-icons/lia";
import { IoFastFoodOutline } from "react-icons/io5";
import { CiApple } from "react-icons/ci";
import { GiCorn } from "react-icons/gi";
import { PiPopcornLight } from "react-icons/pi";
import { LiaPortraitSolid } from "react-icons/lia";
import { BsGem } from "react-icons/bs";

import Product from '../Home/Body/Product/Product'

const Productpage = () => {
  const subMenu = (e) => {
    e.preventDefault();
    if (window.innerWidth <= 5000) {
      const data = e.target.closest("li").querySelector("#data");
      if (data.style.display === "" || data.style.display === "none") {
        data.style.display = "block";
      } else {
        data.style.display = "none";
      }
    }
  }
  // -----
  const dropManu = (e) => {
    e.preventDefault();
    const data = e.target.closest("div").querySelector("#data");
    if (data.style.display === "" || data.style.display === "none") {
      data.style.display = "block";
    } else {
      data.style.display = "none";
    }
  }
  const dropManu1 = (e) => {
    e.preventDefault();
    const data = e.target.closest("div").querySelector("#data1");
    if (data.style.display === "" || data.style.display === "none") {
      data.style.display = "block";
    } else {
      data.style.display = "none";
    }
  }
  const dropManu2 = (e) => {
    e.preventDefault();
    const data = e.target.closest("div").querySelector("#data2");
    if (data.style.display === "" || data.style.display === "none") {
      data.style.display = "block";
    } else {
      data.style.display = "none";
    }
  }
  const dropManu3 = (e) => {
    e.preventDefault();
    const data = e.target.closest("div").querySelector("#data3");
    if (data.style.display === "" || data.style.display === "none") {
      data.style.display = "block";
    } else {
      data.style.display = "none";
    }
  }
  return (
    <>
      <div className="product_page_row">
        <div className="container">
          <div className="product_page_inner">
            <div className="item">
              <div className="item_inner">
                <h2>Product Page</h2>
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
                    <a href="#">Product Page</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ----- */}
      <div className="product_contant">
        <div className="container">
          <div className="product_contant_inner">
            <div className="page_leftbar">
              <div className="page_leftbar_inner">
                <ul>
                  <li onClick={subMenu}>
                    <div className="handing">
                      <p>Category</p>
                      <i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div className="dropdownlist" id='data'>
                      <ul>
                        <li><input type="checkbox" /><a href="#"><span><GiGrapes />Dried Fruit</span></a></li>
                        <li><input type="checkbox" /><a href="#"><span><LiaCookieSolid />Cookies</span></a></li>
                        <li><input type="checkbox" /><a href="#"><span><IoFastFoodOutline />Foods</span></a></li>
                        <li><input type="checkbox" /><a href="#"><span><CiApple />Fresh Fruit</span></a></li>
                        <li><input type="checkbox" /><a href="#"><span><GiCorn />Tuder Roots</span></a></li>
                        <li><input type="checkbox" /><a href="#"><span><CiApple />Vegetables</span></a></li>
                        <li><input type="checkbox" /><a href="#"><span><PiPopcornLight />Snacks</span></a></li>
                        <li><input type="checkbox" /><a href="#"><span><LiaPortraitSolid />Unisex</span></a></li>
                        <li><input type="checkbox" /><a href="#"><span><BsGem />Jewellery</span></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="handing" onClick={subMenu}>
                      <p>Weight</p><i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div className="dropdownlist" id='data'>
                      <ul >
                        <li><input type="checkbox" /><a href="#"><span>2kg</span></a></li>
                        <li><input type="checkbox" /><a href="#"><span>10kg</span></a></li>
                        <li><input type="checkbox" /><a href="#"><span>1kg</span></a></li>
                        <li><input type="checkbox" /><a href="#"><span>2pack</span></a></li>
                        <li><input type="checkbox" /><a href="#"><span>500gm</span></a></li>
                        <li><input type="checkbox" /><a href="#"><span>2pcs</span></a></li>
                        <li><input type="checkbox" /><a href="#"><span>100g</span></a></li>
                        <li><input type="checkbox" /><a href="#"><span>3pcs</span></a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="handing" onClick={subMenu}>
                      <p>Color</p><i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div className="dropdownlist" id='data'>
                      <ul>
                        <li></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <div className="handing" onClick={subMenu}>
                      <p>Price</p><i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div className="dropdownlist" id='data'>
                      <div className="price">
                        <label>
                          FROM
                          <input type="text" value={0} />
                        </label>
                        <span></span>
                        <label>
                          To
                          <input type="text" value={0} />
                        </label>
                      </div>
                      <input type="range" />
                    </div>
                  </li>
                  <li>
                    <div className="handing" onClick={subMenu}>
                      <p>Tags</p><i class="fa-solid fa-angle-down"></i>
                    </div>
                    <div className="dropdownlist" id='data'>
                      <div className="text">
                        <a href="#">Fruits</a>
                        <a href="#">Cookies</a>
                        <a href="#">Foods</a>
                        <a href="#">Tuber</a>
                        <a href="#">Vegetables</a>
                        <a href="#">Snacks</a>
                        <a href="#">Clother</a>
                        <a href="#">Jewellery</a>
                      </div>
                    </div>
                  </li>
                  <div className="button">
                    <button>Filter</button>
                  </div>
                </ul>
              </div>
            </div>
            <div className="page_rightbar">
              <div className="page_rightbar_inner">
                <div className="productpart">
                  <div className="pro_img_block">
                    <div className="pro_img_block_inner">
                      <img src="assets/img/product/4_1.jpg" alt="product" />
                      <div className="img_row">
                        <img src="assets/img/product/4_1.jpg" alt="" />
                        <img src="assets/img/product/5_1.jpg" alt="" />
                        <img src="assets/img/product/6_1.jpg" alt="" />
                        <img src="assets/img/product/7_1.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="pro_text_block">
                    <div className="pro_title">
                      <p>Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips & Snacks.</p>
                    </div>
                    <div className="pro_rating">
                      <div className="icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                      <div className="read">
                        |
                        <a href="#">992 Ranking</a>
                      </div>
                    </div>
                    <div className="pro_price">
                      <div className="price">
                        <div className="final_price">
                          <p>$664.00<span>-78%</span></p>
                        </div>
                        <div className="mrp">
                          <span>M.R.P. : <s>$2,999.00</s></span>
                        </div>
                      </div>
                      <div className="stoke">
                        <p>SKU#: WH12</p>
                        <span>IN STOCK</span>
                      </div>
                    </div>
                    <div className="pro_text">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1990.
                    </div>
                    <div className="pro_list">
                      <ul>
                        <li><b>Closure :</b> Hook & Loop</li>
                        <li><b>Sole :</b>  Polyvinyl Chloride</li>
                        <li><b>Width :</b>  Medium</li>
                        <li><b>Outer Material :</b>  A-Grade Standard Quality</li>
                      </ul>
                    </div>
                    <div className="pro_weight">
                      <strong>Weight</strong>
                      <ul>
                        <li>250g</li>
                        <li>500g</li>
                        <li>1kg</li>
                        <li>2kg</li>
                      </ul>
                    </div>
                    <div className="pro_qty">
                      <div className="count">
                        <span>-</span>
                        <input type='text' value={1} />
                        <span>+</span>
                      </div>
                      <div className="cart">
                        <button>Add To Cart</button>
                      </div>
                      <a href="#"><i class="fa-regular fa-heart"></i></a>
                      <a href="#"><i class="fa-regular fa-eye"></i></a>
                    </div>
                  </div>
                </div>
                <div className="pro_slider">
                  <div className="pro_slider_inner">
                    <div className="item">
                      <div className="item_inner">
                        <a href="#">+</a>
                        <div className="img">
                          <img src="assets/img/product/8_1.jpg" alt="product" />
                        </div>
                        <div className="pro_info">
                          <p>Honey Spiced Nuts</p>
                          <div className="pro_info_rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="pro_info_price">
                            <div className="new_price">$55</div>
                            <div className="old_price"><s>$32</s></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="item_inner">
                        <a href="#">+</a>
                        <div className="img">
                          <img src="assets/img/product/8_1.jpg" alt="product" />
                        </div>
                        <div className="pro_info">
                          <p>Honey Spiced Nuts</p>
                          <div className="pro_info_rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="pro_info_price">
                            <div className="new_price">$55</div>
                            <div className="old_price"><s>$32</s></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="item_inner">
                        <a href="#">+</a>
                        <div className="img">
                          <img src="assets/img/product/8_1.jpg" alt="product" />
                        </div>
                        <div className="pro_info">
                          <p>Honey Spiced Nuts</p>
                          <div className="pro_info_rating">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                          </div>
                          <div className="pro_info_price">
                            <div className="new_price">$55</div>
                            <div className="old_price"><s>$32</s></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product_information">
                  <div className="product_information_inner">
                    <ul>
                      <li>
                        <button onClick={dropManu}>Detail</button>
                      </li>
                      <li>
                        <button onClick={dropManu1}>Specifications</button>
                      </li>
                      <li>
                        <button onClick={dropManu2}>Vendor</button>
                      </li>
                      <li>
                        <button onClick={dropManu3}>Reviews</button>
                      </li>
                    </ul>
                    <div className="pro_info_contant">
                      <div className="pro_info_text" id='data'>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <ul>
                          <li>
                            Any Product types that You want - Simple, Configurable
                          </li>
                          <li>Downloadable/Digital Products, Virtual Products</li>
                          <li>Inventory Management with Backordered items</li>
                          <li>Flatlock seams throughout.</li>
                        </ul>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <span>
                          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don`t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn`t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </span>
                      </div>
                      <div className="pro_info_text" id="data1">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                        <ul>
                          <li>
                            <span>Model</span> SKU140
                          </li>
                          <li>
                            <span>Weigth</span> 500 g
                          </li>
                          <li>
                            <span>Dimensions</span>  35 × 30 × 7 cm
                          </li>
                          <li>
                            <span>Color</span>  Black, Pink, Red, White
                          </li>
                          <li>
                            <span>Size</span>  10 X 20
                          </li>
                        </ul>
                      </div>
                      <div className="pro_info_text" id="data2">
                        <div className="img_text">
                          <span><img src="assets\img\Product_page\01.jpg" alt="" /></span>
                          <div>
                            <b>Ocean Crate</b>
                            <p>Products : 358</p>
                            <p>Sales : 5587</p>
                          </div>
                        </div>
                        <ul>
                          <li>
                            <span>Phone No. :</span>
                            +00 987654321
                          </li>
                          <li>
                            <span>Email. :</span>
                            Example@gmail.com
                          </li>
                          <li>
                            <span>Address. :</span>
                            2548 Broaddus Maple Court, Madisonville KY 4783, USA.
                          </li>
                        </ul>

                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                      </div>
                      <div className="pro_info_text" id="data3">
                        <p>Please <a href="#">login</a> or <a href="#">register</a>  to review the product.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <Product/>
        </div>
      </div>
    </>
  )
}

export default Productpage