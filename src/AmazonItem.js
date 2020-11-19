import React from 'react';
import { shape, string, oneOfType, number } from 'prop-types';
import ItemTitle from './ItemTitle';
import ItemDetails from './ItemDetails';

const AmazonItem = ({ item }) => (
  <div className="item">
    <ItemTitle title={item.title} />
    <ItemDetails price={item.amzn_price} rating={item.rating} />
  </div>
);

AmazonItem.propTypes = {
  item: shape({
    title: oneOfType([number, string]),
    amzn_price: oneOfType([number, string]),
    rating: oneOfType([number, string]),
  })
};

export default AmazonItem;
