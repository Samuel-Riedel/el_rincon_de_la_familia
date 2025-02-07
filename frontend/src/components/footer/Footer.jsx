import React from "eact";
import "./Footer.css";
import footer_logo from "../assets/logo_big.png";
import instagram_icon from "../assets/instagram_icon.png";
import pinterest_icon from "../assets/pinterester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOOPER</p>
        <ul className="footer-links">
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="footer-socials-icon">
          <div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={pinterest_icon} alt="" />
          </div>
          <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
