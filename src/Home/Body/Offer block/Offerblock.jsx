import React from "react";
import Offerblockitem from "./Offerblockitem";

const Offerblock = () => {
    return (
        <>
            <div className="offer_block">
                <div className="container">
                    <div className="offer_block_inner">
                        <div className="offer_block_contant">
                            <div className="ad_block">
                                <div className="ad_block_inner">
                                    <img src="assets\img\Ad_banner\ad_banner 04.jpg" alt="adbanner" />
                                    <div className="ad_block_text">
                                        <p>Our top most products check it now</p>
                                        <a href="#">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="product_item">
                                <Offerblockitem title="Treading" intitle="Items" image1="assets/img/product/10_1.jpg" lavel1="healthy nutmix 200g pack" type1="driedfruit" price1="$42.00" oldprice1="$45.00"
                                    image2="assets/img/product/11_1.jpg" lavel2="Organic fresh tomato" type2="Vegetables" price2="$25.00" oldprice2="$30.00"
                                    image3="assets/img/product/19_1.jpg" lavel3="Coffee with chocolate cream mix pack" type3="Coffee" price3="$62.00" oldprice3="$65.00"
                                    image1_1="assets/img/product/25_1.jpg" lavel1_1="Fresh Lichi" type1_1="driedfruit" price1_1="$10.00" oldprice1_1="$11.00"
                                    image2_1="assets/img/product/5_1.jpg" lavel2_1="Berry & Graps Mix Snack" type2_1="driedfruit" price2_1="$52.00" oldprice2_1="$56.00"
                                    image3_1="assets/img/product/29_1.jpg" lavel3_1="Fruits" type3_1="driedfruit" price3_1="$20.00" oldprice3_1="$30.00" />
                            </div>
                            <div className="product_item">
                                <Offerblockitem title="Top" intitle="Rated" image1="assets/img/product/17_1.jpg" lavel1="Ginger - Organic" type1="vegetables" price="$62.00" oldprice1="$65.00"
                                    image2="assets/img/product/2_2.jpg" lavel2="Dates Value Pouch Dates Value Pouch" type2="Driedfruit" price2="$56.00" oldprice2="$78.00"
                                    image3="assets/img/product/23_1.jpg" lavel3="Blue berry" type3="Fruits" price3="$25.00" oldprice3="$30.00"
                                    image1_1="assets/img/product/13_1.jpg" lavel1_1="Onion - Hybrid" type1_1="vegetables" price1_1="$20.00" oldprice1_1="$30.00"
                                    image2_1="assets/img/product/12_1.jpg" lavel2_1="Potato" type2_1="vegetables" price2_1="$50.00" oldprice2_1="$55.00"
                                    image3_1="assets/img/product/28_1.jpg" lavel3_1="Mango - Kesar" type3_1="Fruits" price3_1="$52.00" oldprice3_1="$55.00" />
                            </div>
                            <div className="product_item">
                                <Offerblockitem title="Top" intitle="Selling" image1="assets/img/product/18_1.jpg" lavel1="Lemon - Seedless" type1="vegetables" price1="$42.00" oldprice1="$45.00"
                                    image2="assets/img/product/28_1.jpg" lavel2="Mango - Kesar" type2="Fruits" price2="$62.00" oldprice2="$65.00"
                                    image3="assets/img/product/7_1.jpg" lavel3="Mixed Nuts & Almonds Dry Fruits" type3="Driedfruit" price3="$10.00" oldprice3="$11.00"
                                    image1_1="assets/img/product/3_1.jpg" lavel1_1="Californian Almonds Value Pack" type1_1="driedfruit" price1_1="$42.00" oldprice1_1="$45.00"
                                    image2_1="assets/img/product/13_1.jpg" lavel2_1="Onion - Hybrid" type2_1="vegetables" price2_1="$62.00" oldprice2_1="$65.00"
                                    image3_1="assets/img/product/5_1.jpg" lavel3_1="Berry & Graps Mix Snack" type3_1="driedfruit" price3_1="$10.00" oldprice3_1="$11.00" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Offerblock;