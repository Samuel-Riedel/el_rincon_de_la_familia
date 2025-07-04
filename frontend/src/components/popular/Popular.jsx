import React from "react";
import "./Popular.css";

import data_product from "../assets/data.js";
import Item from "../item/Item.jsx";

const Popular = () => {
  return (
    <div className="popular contenedor-scroll">
      <h1>Popular en RINFAM</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
