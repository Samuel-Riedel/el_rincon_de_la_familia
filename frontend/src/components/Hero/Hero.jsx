import React from "react";
import "./Hero.css";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import Muebles_front_page from "../assets/WA Images/Muebles_front_page.png";

//import hero_image from "../assets/hero_image.png";
//import mueble from "../assets/mueble.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>No Te Pierdas Las Mejores</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Ofertas</p>
            {/*<img src={hand_icon} alt="" />*/}
          </div>
          <p>Para este</p>
          <p>Otoño</p>
        </div>
        <a
          className="visita-tienda"
          href="https://maps.app.goo.gl/6shkscfZ1tWUxLK67"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="hero-latest-button visita-tienda">
            <div>Visita la Tienda</div>
            <img src={arrow_icon} alt="" />
          </div>
        </a>
      </div>
      <div className="hero-right">
        <img src={Muebles_front_page} alt="" />
      </div>
    </div>
  );
};

export default Hero;
