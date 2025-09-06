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
        <a href="/">
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
          <Link
            style={{ textDecoration: "none" }}
            to="https://www.whatsapp.com/channel/0029VaDv1Q5Gk1FxV3NvTa1h"
          >
            {" "}
            {/*This line of code: was removed to prevent access on some old links: <Link style={{ textDecoration: "none" }} to="/mens"> */}
            Nosotros
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link
            style={{ textDecoration: "none" }}
            to="https://www.google.com/maps/place/Tienda+Solidaria+-+RinFam/@41.4511068,2.2088531,17z/data=!4m7!3m6!1s0x12a4bdf1c0b13087:0x3b5fd8e18efe5841!8m2!3d41.4511068!4d2.2136167!15sCgZyaW5mYW2SARRjdWx0dXJhbF9hc3NvY2lhdGlvbuABAA!16s%2Fg%2F11xlf0b4fv?entry=tts&g_ep=EgoyMDI1MDgxOS4wIPu8ASoASAFQAw%3D%3D&skid=801040c4-766f-4036-b4aa-ec83bed89e86"
          >
            {/*This line of code: was removed to prevent access on some old links: <Link style={{ textDecoration: "none" }} to="/womens"> */}
            Tienda
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link
            style={{ textDecoration: "none" }}
            to="https://wa.me/+34624217879"
          >
            {" "}
            {/*This line of code: was removed to prevent access on some old links: <Link style={{ textDecoration: "none" }} to="/kids"> */}
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
