import React from "react";
import "./NewCollections.css";
import new_collection from "../assets/new_collections";
import Item from "../item/Item";
const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {new_collection.map((item, index) => {
          return <Item />;
        })}
      </div>
    </div>
  );
};

export default NewCollections;
