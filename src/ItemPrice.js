import React from "react";
import buildPrice from "./helper/buildPrice";

const ItemPrice = ({ price }) => {
  const displayPrice = buildPrice(price);
  return (
    <div className="item_detail">
      <p>Price: {displayPrice}</p>
    </div>
  );
};

export default ItemPrice;
