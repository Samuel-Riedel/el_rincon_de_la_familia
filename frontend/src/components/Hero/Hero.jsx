import React from "react";
import "./Hero.css";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";
import Muebles_front_page from "../assets/WA Images/Muebles_front_page.png";
//import mueble from "../assets/mueble.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Productos Mas Recientes</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Nueva</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Colección</p>
          <p>Para Todos</p>
        </div>
        <div className="hero-latest-button">
          <div>Nueva Collección</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={Muebles_front_page} alt="" />
      </div>
    </div>
  );
};

export default Hero;
