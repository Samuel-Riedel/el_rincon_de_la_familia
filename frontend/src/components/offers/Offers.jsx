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
        <button>Visita la Tienda!</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
