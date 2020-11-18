import React from "react";
import ItemPrice from "./ItemPrice";
import ItemRating from "./ItemRating";

const ItemDetails = ({ price, rating }) => (
  <div className="detail_container">
    <ItemPrice price={price} />
    <ItemRating rating={rating} />
  </div>
);

export default ItemDetails;
