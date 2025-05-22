import React from "react";
import Serviceitem from "./Serviceitem";

import { PiTruckLight } from "react-icons/pi";
import { FaHandHolding } from "react-icons/fa";
import { HiOutlinePercentBadge } from "react-icons/hi2";
import { LiaDonateSolid } from "react-icons/lia";



const Service = () => {
    return (
        <>
            <div className="service_block">
                <div className="container">
                    <div className="service_block_inner">
                        <div className="items">
                            <Serviceitem icon={<PiTruckLight />} handing="Free Shipping" handingtext="Free shipping on all US order or order above $200" />
                            <Serviceitem icon={<FaHandHolding />} handing="24X7 Support" handingtext="Contact us 24 hours a day, 7 days a week" />
                            <Serviceitem icon={<HiOutlinePercentBadge />} handing="30 Days Returng" handingtext="Simply return it within 30 days for an exchange" />
                            <Serviceitem icon={<LiaDonateSolid />} handing="Payment Secure" handingtext="Contact us 24 hours a day, 7 days a week" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Service;