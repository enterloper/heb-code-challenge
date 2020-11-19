import React from 'react';
import {number} from 'prop-types';
import buildPrice from "./helper/buildPrice";

const ItemPrice = ({ price }) => {
  const displayPrice = buildPrice(price);
  return (
    <div className="item_detail">
      <p>Price: {displayPrice}</p>
    </div>
  );
};

ItemPrice.propTypes = {
  price: number.isRequired
};

export default ItemPrice;
