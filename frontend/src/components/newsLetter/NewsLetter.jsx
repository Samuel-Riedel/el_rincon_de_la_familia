import React from "react";
import "./NewsLetter.css";
import whatsapp_icon from "../assets/whatsapp_icon.png";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Obtén información exclusiva en tu correo electrónico.</h1>
      <p>Suscríbete a nuestro boletín y mantente actualizado.</p>
      <div className="subscribe-input-newsletter">
        <div className="whatsappicon-newsletter">
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
  );
};

export default NewsLetter;
