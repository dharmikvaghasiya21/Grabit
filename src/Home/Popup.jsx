import React from "react";

const Popup = () => {
    function closePopup() {
        document.getElementById("all-popup").style.display = "none";
    }

    return (
        <>
            <div className="pop-block" id="all-popup">
                <div className="pop-container">
                    <div className="pop-inner">
                        <div className="close" onClick={closePopup}>
                            <span>×</span>
                        </div>
                        <div className="pop-items">
                            <div className="pop-item">
                                <div className="pop-item-inner">
                                    <div className="popup-image">
                                        <img src="assets\img\popup\newsletter.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="pop-item">
                                <div className="pop-item-inner">
                                    <div className="popup-newsletter">
                                        <span>Newsletter</span>
                                        <p>Subscribe to Masterkart to stay updated.</p>
                                        <input type="email" placeholder="Email Address" />
                                        <button>subcribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popup;
