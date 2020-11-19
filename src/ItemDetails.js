import React from 'react';
import { number, oneOfType, string } from'prop-types'
import ItemPrice from './ItemPrice';
import ItemRating from './ItemRating';

const ItemDetails = ({ price, rating }) => (
  <div className="detail_container">
    <ItemPrice price={price} />
    <ItemRating rating={rating} />
  </div>
);

ItemDetails.propTypes = {
  price: oneOfType([number, string]),
  rating: oneOfType([number, string])
}
export default ItemDetails;
