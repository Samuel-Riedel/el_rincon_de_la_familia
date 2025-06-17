import React, { useState } from "react";
import "./Navbar.css";

//import logo from "../assets/logo.png";
//import rincon from "../assets/rincon.jpg";
//import cart_icon from "../assets/cart_icon.png";
//import rincon_logo from "../assets/logos/rincon_logo.png";
import rimfam_logo from "../assets/logos/rimfam_logo.png";
import casita_rincon_de_la_familia from "../assets/logos/casita_rincon_de_la_familia.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <a href="https://www.samuelriedel.com">
          <img src={rimfam_logo} alt="logo" className="rincon" />
        </a>
        <p>Tienda RimFam</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Mens
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
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
        <div className="casita_rincon_de_la_familia">
          <a href="https://www.elrincondelafamilia.org/">
            <img src={casita_rincon_de_la_familia} alt="Cart Icon" />
          </a>
        </div>
        {/*</Link>
        <Link to="/cart">
          <img src={rincon_logo} alt="Cart Icon" />
        </Link>*/}
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
