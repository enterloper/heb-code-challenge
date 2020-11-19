import React from 'react';
import {number} from 'prop-types';

const ItemRating = ({ rating }) => {
  return (
    <div className="item_detail">
      <p>{rating ? `Rating: ${rating}` : "Rating unavailable"}</p>
    </div>
  );
};

ItemRating.propTypes = {
  rating: number
}

export default ItemRating;
