import React from "react";
import Arrivals_item from "./Arrivals_item";


const Arrivals = () => {
    function showMenu(menuId) {
        document.getElementById('all').classList.remove('active');
        document.getElementById('snackspices').classList.remove('active');
        document.getElementById('fruits').classList.remove('active');
        document.getElementById('vegetables').classList.remove('active');


        document.getElementById(menuId).classList.add('active');
    }
    return (
        <>
            <div className="Arrivals">
                <div className="container">
                    <div className="Arrivals_inner">
                        <div className="title">
                            <div className="container">
                                <div className="title_inner">
                                    <div className="text">
                                        <h2>New <span>Arrivals</span></h2>
                                        <p>Shop online for new arrivals and get free shipping!</p>
                                    </div>
                                    <div className="rows">
                                        <ul>
                                            <li onClick={() => showMenu("all")}>All</li>
                                            <li onClick={() => showMenu("snackspices")}>Snack & Spices</li>
                                            <li onClick={() => showMenu("fruits")}>Fruits</li>
                                            <li onClick={() => showMenu("vegetables")}>Vegetables</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row" id="all">
                            <Arrivals_item mainimg="assets/img/product/6_1.jpg" hoverimg="assets/img/product/6_2.jpg" flags="SALE" title="Mixed Nuts Berries Pack" price="$45.00" oldprice="$56.00" category="Dried Fruits" />
                            <Arrivals_item mainimg="assets/img/product/3_1.jpg" hoverimg="assets/img/product/3_2.jpg" flags="SALE" title="Multi Grain Combo Cookies" price="$25.00" oldprice="$30.00" category="Cookies" />
                            <Arrivals_item mainimg="assets/img/product/9_1.jpg" hoverimg="assets/img/product/9_2.jpg" flags="SALE" title="Fresh Mango Juice Park" price="$46.00" oldprice="$65.00" category="Foods" />
                            <Arrivals_item mainimg="assets/img/product/2_1.jpg" hoverimg="assets/img/product/2_2.jpg" flags="SALE" title="Dates value Fresh Pouch" price="$78.00" oldprice="$85.00" category="Dried Fruits" />
                            <Arrivals_item mainimg="assets/img/product/1_1.jpg" hoverimg="assets/img/product/1_2.jpg" flags="NEW" title="Stick Fiber Masala Magic" price="$45.00" oldprice="$50.00" category="Foods" />
                            <Arrivals_item mainimg="assets/img/product/24_1.jpg" hoverimg="assets/img/product/24_1.jpg" flags="SALE" title="Natutal Hub Cherry Karonda" price="$49.00" oldprice="$56.00" category="Fresh Fruit" />
                            <Arrivals_item mainimg="assets/img/product/9_1.jpg" hoverimg="assets/img/product/9_2.jpg" flags="SALE" title="Fresh Mango Juice Park" price="$20.00" oldprice="$56.00" category="Foods" />
                            <Arrivals_item mainimg="assets/img/product/17_1.jpg" hoverimg="assets/img/product/17_1.jpg" flags="SALE" title="Fresh Mango Ginger Park" price="$2.00" oldprice="$56.00" category="Tuber Root" />
                            <Arrivals_item mainimg="assets/img/product/4_1.jpg" hoverimg="assets/img/product/4_2.jpg" flags="SALE" title="Natutal Hub Cherry Karonda" price="$49.00" oldprice="$56.00" category="Foods" />
                            <Arrivals_item mainimg="assets/img/product/25_1.jpg" hoverimg="assets/img/product/25_1.jpg" flags="SALE" title="Fresh Mango Ginger Park" price="$20.00" oldprice="$56.00" category="Fresh Fruit" />
                        </div>
                        <div className="row" id="snackspices">
                            <Arrivals_item mainimg="assets/img/product/1_1.jpg" hoverimg="assets/img/product/1_2.jpg" flags="SALE" title="Crunchy Triangle Chips Snacks" price="$45.00" oldprice="$56.00" category="Dried Fruits" />
                            <Arrivals_item mainimg="assets/img/product/2_1.jpg" hoverimg="assets/img/product/2_2.jpg" flags="SALE" title="Dates Value Fresh Pouch" price="$45.00" oldprice="$56.00" category="Dried Fruits" />
                            <Arrivals_item mainimg="assets/img/product/3_1.jpg" hoverimg="assets/img/product/3_1.jpg" flags="SALE" title="Californian Almonds Value Pack" price="$45.00" oldprice="$56.00" category="Dried Fruits" />
                            <Arrivals_item mainimg="assets/img/product/4_1.jpg" hoverimg="assets/img/product/4_2.jpg" flags="SALE" title="Natural Hub Cherry Karonda" price="$45.00" oldprice="$56.00" category="Dried Fruits" />
                            <Arrivals_item mainimg="assets/img/product/5_1.jpg" hoverimg="assets/img/product/5_2.jpg" flags="SALE" title="Berry & Graps" price="$45.00" oldprice="$56.00" category="Dried Fruits" />
                            <Arrivals_item mainimg="assets/img/product/6_1.jpg" hoverimg="assets/img/product/6_1.jpg" flags="SALE" title="Mixed Nuts Seeds & Berries Pack" price="$45.00" oldprice="$56.00" category="Dried Fruits" />
                            <Arrivals_item mainimg="assets/img/product/7_1.jpg" hoverimg="assets/img/product/7_2.jpg" flags="SALE" title="Mixed Nuts & Almonds Dry Fruits" price="$45.00" oldprice="$56.00" category="Dried Fruits" />
                            <Arrivals_item mainimg="assets/img/product/8_1.jpg" hoverimg="assets/img/product/8_1.jpg" flags="SALE" title="Fresh Mango juice pack" price="$45.00" oldprice="$56.00" category="Dried Fruits" />
                            <Arrivals_item mainimg="assets/img/product/9_1.jpg" hoverimg="assets/img/product/9_2.jpg" flags="SALE" title="Healthy Nutmix, 200g Pack" price="$45.00" oldprice="$56.00" category="Dried Fruits" />
                            <Arrivals_item mainimg="assets/img/product/10_1.jpg" hoverimg="assets/img/product/10_2.jpg" flags="SALE" title="Mixed Nuts Berries Pack" price="$45.00" oldprice="$56.00" category="Dried Fruits" />
                        </div>
                        <div className="row" id="fruits">
                            <Arrivals_item mainimg="assets/img/product/21_1.jpg" hoverimg="assets/img/product/21_1.jpg" flags="SALE" title="Apple" price="$45.00" oldprice="$56.00" category="Dried Fruits" />
                            <Arrivals_item mainimg="assets/img/product/22_1.jpg" hoverimg="assets/img/product/22_1.jpg" flags="SALE" title="Kamalam Fruit" price="$45.00" oldprice="$56.00" category="Dried Fruits" />
                            <Arrivals_item mainimg="assets/img/product/23_1.jpg" hoverimg="assets/img/product/23_1.jpg" flags="SALE" title="Blue berry" price="$45.00" oldprice="$56.00" category="Dried Fruits" />
                            <Arrivals_item mainimg="assets/img/product/24_1.jpg" hoverimg="assets/img/product/24_1.jpg" flags="SALE" title="Natural Hub Cherry Karonda" price="$45.00" oldprice="$56.00" category="Dried Fruits" />
                            <Arrivals_item mainimg="assets/img/product/25_1.jpg" hoverimg="assets/img/product/25_1.jpg" flags="SALE" title="Fresh Mango juice pack" price="$45.00" oldprice="$56.00" category="Dried Fruits" />
                            <Arrivals_item mainimg="assets/img/product/26_1.jpg" hoverimg="assets/img/product/26_1.jpg" flags="SALE" title="Fresh Organic Ginger Pack" price="$45.00" oldprice="$56.00" category="Dried Fruits" />
                            <Arrivals_item mainimg="assets/img/product/27_1.jpg" hoverimg="assets/img/product/27_1.jpg" flags="SALE" title="Guava" price="$45.00" oldprice="$56.00" category="Dried Fruits" />
                            <Arrivals_item mainimg="assets/img/product/28_1.jpg" hoverimg="assets/img/product/28_1.jpg" flags="SALE" title="Mango - Kesar" price="$45.00" oldprice="$56.00" category="Dried Fruits" />
                            <Arrivals_item mainimg="assets/img/product/29_1.jpg" hoverimg="assets/img/product/29_1.jpg" flags="SALE" title="Pineapple" price="$45.00" oldprice="$56.00" category="Dried Fruits" />
                            <Arrivals_item mainimg="assets/img/product/30_1.jpg" hoverimg="assets/img/product/30_1.jpg" flags="SALE" title="banana" price="$45.00" oldprice="$56.00" category="Dried Fruits" />
                        </div>
                        <div className="row" id="vegetables">
                            <Arrivals_item mainimg="assets/img/product/11_1.jpg" hoverimg="assets/img/product/11_2.jpg" title="Tomato - Hybrid"  flags="SALE" price="$5.00" oldprice="$6.00" category="Vegetables" />
                            <Arrivals_item mainimg="assets/img/product/12_1.jpg" hoverimg="assets/img/product/12_2.jpg" title="Photato"  flags="SALE" price="$15.00" oldprice="$17.00" category="Potato" />
                            <Arrivals_item mainimg="assets/img/product/13_1.jpg" hoverimg="assets/img/product/13_2.jpg" title="Onion - Hybrid"  flags="SALE" price="$25.00" oldprice="$20.00" category="Tuber Root" />
                            <Arrivals_item mainimg="assets/img/product/14_1.jpg" hoverimg="assets/img/product/14_2.jpg" title="Coriander Bunch"  flags="SALE" price="$5.00" oldprice="$7.00" category="Vegetables" />
                            <Arrivals_item mainimg="assets/img/product/15_1.jpg" hoverimg="assets/img/product/15_2.jpg" title="Capsicum - Red"  flags="SALE"price="$2.00" oldprice="$2.00" category="Vegetables" />
                            <Arrivals_item mainimg="assets/img/product/16_1.jpg" hoverimg="assets/img/product/16_1.jpg" title="Sweet Corn"  flags="SALE" price="$6.00" oldprice="$8.00" category="Vegetables" />
                            <Arrivals_item mainimg="assets/img/product/17_1.jpg" hoverimg="assets/img/product/17_1.jpg" title="Fresh Organic Ginger Pack"  flags="SALE" price="$2.00" oldprice="$2.00" category="Tuder Root" />
                            <Arrivals_item mainimg="assets/img/product/18_1.jpg" hoverimg="assets/img/product/18_1.jpg" title="Tuber Root"   flags="SALE"price="$2.00" oldprice="$3.00" category="Tuber Root" />
                            <Arrivals_item mainimg="assets/img/product/19_1.jpg" hoverimg="assets/img/product/19_1.jpg" title="Farm Eggs - Brown"  flags="SALE" price="$3.00" oldprice="$5.00" category="Eggs" />
                            <Arrivals_item mainimg="assets/img/product/20_1.jpg" hoverimg="assets/img/product/20_1.jpg" title="Organic Fresh Broccoli"   flags="SALE"price="$10.00" oldprice="$11.00" category="Vegetables" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Arrivals; 