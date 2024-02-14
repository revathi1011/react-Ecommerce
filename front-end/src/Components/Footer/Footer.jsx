import React from "react";
import './Footer.css'
import logo from '../Assets/logo.jpg'
import pinternet from '../Assets/pinternet-icon.png'
import whatsapp from '../Assets/whatsapp-icon.jpg'
import insta from '../Assets/insta-icon.jpg'

const Footer =() =>{
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={logo} alt="" />
                <p>Shopper</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={pinternet} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={insta} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>
                    Copyright @ 2023 - All Right 
                </p>
            </div>
        </div>
    )
}
export default Footer