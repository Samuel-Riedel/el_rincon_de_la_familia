import React from "react";
import "./Footer.css";
//import footer_logo from "../assets/logo_big.png";
//import instagram_icon from "../assets/instagram_icon.png";
//import pintester_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";
import rincon from "../assets/rincon.jpg";
import paypal_solid from "../assets/cc-paypal-brands-solid.svg";
import facebook_solid from "../assets/facebook-brands-solid.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={rincon} alt="" className="rincon-footer" />
        <p>El Rincón de la Familia</p>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-container">
            <img src={facebook_solid} alt="" className="facebook-logo" />
          </div>
          <div className="footer-icons-container">
            <img src={paypal_solid} alt="" className="paypal-logo" />
          </div>
          <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2025 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
