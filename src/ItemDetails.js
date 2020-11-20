import React from 'react';
import { number, oneOfType, string } from'prop-types'
import ItemPrice from './ItemPrice';
import ItemRating from './ItemRating';
import AmazonAnchor from './AmazonAnchor';
const ItemDetails = ({ price, rating, url }) => (
  <div className="detail_container">
    <ItemPrice price={price} />
    <AmazonAnchor label="See on Amazon" url={url} />
    <ItemRating rating={rating} />
  </div>
);

ItemDetails.propTypes = {
  price: oneOfType([number, string]),
  rating: oneOfType([number, string]),
  url: string
}
export default ItemDetails;
