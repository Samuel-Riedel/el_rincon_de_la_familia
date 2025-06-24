import React from "react";
import "./Footer.css";
//import footer_logo from "../assets/logo_big.png";
//import instagram_icon from "../assets/instagram_icon.png";
//import pintester_icon from "../assets/pintester_icon.png";
//import rincon from "../assets/rincon.jpg";
import main_logo from "../assets/logos/main_logo.jpg";
import whatsapp_icon from "../assets/whatsapp_icon.png";
import paypal_solid from "../assets/cc-paypal-brands-solid.svg";
import facebook_solid from "../assets/facebook-brands-solid.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={main_logo} alt="" className="rincon-footer" />
        <p>Tienda Solidaria RinFam</p>
        <ul className="footer-links">
          {/*<li>Nuestra empresa</li>*/}
          <li>Productos</li>
          <li>Nuestras oficinas</li>
          <li>Sobre nosotros</li>
          <li>Contáctanos</li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-container">
            <a
              href="https://www.facebook.com/elrinfam?rdid=GYFdDYL3jijrDq3s&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18rhZFndve%2F#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook_solid} alt="" className="facebook-logo" />
            </a>
          </div>
          <div className="footer-icons-container">
            <a
              href="https://www.paypal.com/ncp/payment/JZ4RG86GDC9ZC"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={paypal_solid} alt="" className="paypal-logo" />
            </a>
          </div>
          <div className="footer-icons-container">
            <a
              href="https://wa.me/+34624217879"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp_icon} alt="" />
            </a>
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
