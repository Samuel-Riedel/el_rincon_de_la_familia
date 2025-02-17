import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Obtén información exclusiva en tu correo electrónico.</h1>
      <p>Suscríbete a nuestro boletín y mantente actualizado.</p>
      <div>
        <input type="email" placeholder="Tu dirección de correo electrónico" />
        <button>Suscríbete</button>
      </div>
    </div>
  );
};

export default NewsLetter;
