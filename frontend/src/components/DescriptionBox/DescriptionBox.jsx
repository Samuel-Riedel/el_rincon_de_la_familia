import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description (122)</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Ecommerce is the electronic buying and selling of goods and services,
          usually via the internet. Businesses can build their own ecommerce
          website, set up an ecommerce storefront on an established selling site
          like Amazon, or do it all for a multi-channel approach. Is ecommerce
          still growing?
        </p>
        <p>
          El comercio electrónico o ecommerce es el comercio de bienes y
          servicios en Internet.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
