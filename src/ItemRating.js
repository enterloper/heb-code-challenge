import React from 'react';
import {number} from 'prop-types';

const ItemRating = ({ rating }) => {
  return (
    <div className='item_rating'>
      <div className="stars" style={{['--rating']: rating}} aria-label={`Rating of this product is ${rating} out of 5.`} />
      {rating && <p>Rating: {rating}</p>}
    </div>
  );
};

ItemRating.propTypes = {
  rating: number
}

export default ItemRating;
