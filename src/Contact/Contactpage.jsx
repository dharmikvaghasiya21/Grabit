import React, { useState } from "react";
import emailjs from 'emailjs-com';

const Contactpage = () => {
    const[name,setname]= useState('');
    const[email,setemail]= useState('');
    const[phone,setphone]= useState('');
    const[massage,setmassage]= useState('');

    const handlesubmit = (e) => {
        e.preventDefault();
    
        const templateParams = {
          from_name: name,
          from_email: email,
          phone: phone,
          message: massage,
        };
    
        emailjs
          .send(
            "service_d7t70yq",      // servide is
            "template_ryf0hyn",     //  template id   
            templateParams,
            "iJWUOpHOmfcEe8nLZ"          // Public Key
          )
          .then(
            (response) => {
              console.log("SUCCESS!", response.status, response.text);
              alert("Message Sent Successfully!");
              setname('');
              setemail('');
              setphone('');
              setmassage('');
            },
            (err) => {
              console.log("FAILED...", err);
              alert("Message sending failed.");
            }
          );
      };

    return (
        <>
            <div className="product_page_row">
                <div className="container">
                    <div className="product_page_inner">
                        <div className="item">
                            <div className="item_inner">
                                <h2>Contact Page</h2>
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
                                        <a href="#">Contact Page</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ----- */}
            <div className="register_contant">
                <div className="container">
                    <div className="register_conatant_inner">
                        <div className="section_title">
                            <h2>Get In <span>Touch</span></h2>
                            <p>Please select a topic below related to you inquiry. If<br /> you don t fint what you need, fill out our contact form.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact_page_row">
                <div className="container">
                    <div className="contact_page_row_inner">

                        <div className="item">
                            <div className="item_inner">
                                <div className="detail">
                                    <div className="icon">
                                        <i class="fa-regular fa-envelope"></i>
                                    </div>
                                    <div className="info">
                                        <strong>Mail & Website</strong>
                                        <p><i class="fa-solid fa-envelope"></i>mail.example@gmail.com</p>
                                        <p><i class="fa-solid fa-earth-americas"></i>www.yourdomain.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item_inner">
                                <div className="detail">
                                    <div className="icon">
                                        <i class="fa-solid fa-mobile-screen-button"></i>
                                    </div>
                                    <div className="info">
                                        <strong>Contact</strong>
                                        <p><i class="fa-solid fa-mobile-screen-button"></i>  (+91)-9876XXXXX</p>
                                        <p><i class="fa-solid fa-mobile-screen-button"></i>  (+91)-98576XXXXX</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item_inner">
                                <div className="detail">
                                    <div className="icon">
                                        <i class="fa-solid fa-location-dot"></i>
                                    </div>
                                    <div className="info">
                                        <strong>Address</strong>
                                        <p><i class="fa-solid fa-location-dot"></i>  Ruami Mello Moraes Filho, 987 - <br />Salvador - MA, 40352, Brazil.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contact_form">
                        <div className="item">
                            <div className="item_inner">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14876.460260949783!2d72
                                .8129728554199!3d21.2272853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04ec11f8
                                51d9b%3A0x6c3fb053aee65500!2sKantareshwar%20Mahadev%20Temple!5e0!3m2!1sen!2sin!4v1748088840
                                986!5m2!1sen!2sin"></iframe>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item_inner">
                                <form>
                                    <input type="name" placeholder="FULL NAME" value={name} onChange={(e)=>setname(e.target.value)}/>
                                    <input type="email" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
                                    <input type="number" placeholder="Phone" value={phone} onChange={(e)=>setphone(e.target.value)}/>
                                    <textarea placeholder="Message"  value={massage} onChange={(e)=>setmassage(e.target.value)} required></textarea>
                                    <button onClick={handlesubmit}>Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactpage;