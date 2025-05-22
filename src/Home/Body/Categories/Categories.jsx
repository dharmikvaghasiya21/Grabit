import React from 'react';
import { CiApple } from "react-icons/ci";
import { RiDrinks2Fill } from "react-icons/ri";
import { GiFoodChain } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
import { LiaEggSolid } from "react-icons/lia";
import Item from './Item';
const Categories = () => {


    return (
        <div className="main_categories">
            <div className="categories_inner">
                <div className="container">
                    <div className="full_item">
                        <Item icon={<CiApple />} 
                        name ="Fruits" discount="30%" item="320 Items" borderImage="linear-gradient(#ffeae9,#ffffff)" />
                        <Item icon={<RiDrinks2Fill />} name="Bakery" discount=" " item="65 Items" borderImage="linear-gradient(#e2fde2, #ffffff)" />
                        <Item icon={<GiFoodChain />} name="Vegetables" discount="15%" item="548 Items" borderImage="linear-gradient(#ffeae9, #ffffff)" />
                        <Item icon={<IoFastFoodOutline />} name="Dairy & Milk" discount="10%" item="48 Items" borderImage="linear-gradient(#fde1f5, #ffffff)" />
                        <Item icon={<LiaEggSolid />} name="Snack & Spice" discount="" item="59 Items" borderImage="linear-gradient(#ecf0ff, #ffffff)" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Categories;
