import React from "react";
import "./Offers.css";
import exclusive_image from "../assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Productos</h1>
        <h1>Recien Ingresados</h1>
        <p>Visitanos para saber mas!</p>
        <a
          className="visita-tienda"
          href="https://maps.app.goo.gl/6shkscfZ1tWUxLK67"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Visita la Tienda</button>
        </a>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
