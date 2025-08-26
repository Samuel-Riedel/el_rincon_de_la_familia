import React, { useState } from "react";
import "./Navbar.css";

//import logo from "../assets/logo.png";
//import cart_icon from "../assets/cart_icon.png";

import rincon from "../assets/logos/casita_rincon_de_la_familiaV2.jpg";
import main_logo from "../assets/logos/main_logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <a href="https://stirring-marigold-91a8a5.netlify.app/">
          <img src={main_logo} alt="logo" className="rincon" />
        </a>

        <p>RinFam</p>
      </div>
      <div className="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
        ☰
      </div>
      <ul className={`nav-menu ${showMenu ? "active" : ""}`}>
        <li
          onClick={() => {
            setMenu("Tienda");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Inicio
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Nosotros
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            Tienda
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Contacto
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        {/*<Link to="/login">*/}
        <a
          href="https://www.paypal.com/ncp/payment/JZ4RG86GDC9ZC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>Donaciones</button>
        </a>
        <a
          href="https://www.elrincondelafamilia.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={rincon} alt="Cart Icon" />
        </a>
        {/*</Link>
        <Link to="/cart">
          <img src={rincon} alt="Cart Icon" />
        </Link>
        <div className="nav-cart-count">0</div>
        */}
      </div>
    </div>
  );
};

export default Navbar;
