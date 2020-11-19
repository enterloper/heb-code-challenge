import React from 'react';
import {number} from 'prop-types';

const ItemRating = ({ rating }) => {
  return (
    <div className="stars" style={{['--rating']: rating}} aria-label={`Rating of this product is ${rating} out of 5.`} />
  );
};
{/* <div className="item_detail">
<p>{rating ? `Rating: ${rating}` : "Rating unavailable"}</p>
</div> */}
ItemRating.propTypes = {
  rating: number
}

export default ItemRating;
