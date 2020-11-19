import React from 'react';
import {string, func} from 'prop-types';

const sortOptions = [
  { value: 'priceLowHigh', label: 'Price: Lowest to highest' },
  { value: 'priceHighLow', label: 'Price: Highest to lowest' },
  { value: 'ratingHighLow', label: 'Rating: Highest to lowest' },
  { value: 'ratingLowHigh', label: 'Rating: Lowest to highest' }
];

const SortSelection = ({ id, handleChange }) => (
  <label htmlFor={id}>
    Sort by:
    <select onChange={handleChange} id={id} name={id}>
      {sortOptions.map(({ label, value }) => (
        <option key={label} value={value}>{label}</option>
      ))}
    </select>
  </label>
);

SortSelection.propTypes = {
  id: string.isRequired,
  handleChange: func.isRequired
};

export default SortSelection;
