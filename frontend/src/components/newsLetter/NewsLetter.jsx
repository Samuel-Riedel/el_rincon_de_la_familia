import React from "react";
import "./NewsLetter.css";
import whatsapp_icon from "../assets/whatsapp_icon.png";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Novedades al instante!</h1>
      <p>Únete a nuestro canal de WhatsApp.</p>
      <div className="subscribe-input-newsletter">
        <div className="whatsappicon-newsletter">
          <a
            href="https://www.whatsapp.com/channel/0029VaDv1Q5Gk1FxV3NvTa1h"
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
