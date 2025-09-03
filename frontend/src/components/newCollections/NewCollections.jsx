import React from "react";
import "./NewCollections.css";
import new_collection from "../assets/new_collections";
import Item from "../item/Item";
const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>Nuevos Productos</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              //new_price={item.new_price} Removed currency from LP
              //old_price={item.old_price} Removed currency from LP
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
