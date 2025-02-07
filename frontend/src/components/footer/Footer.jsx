import React from "eact";
import "./Footer.css";
import footer_logo from "../assets/logo_big.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
      </div>
    </div>
  );
};

export default Footer;
