import React from 'react';
import {string, number, oneOfType, func} from 'prop-types';

const FilterInput = ({ id, label, type, min, max, value, handleChange }) => (
  <div className="filter_input">
    <label htmlFor={id}>
      {label}
    </label>
    <input
      onChange={handleChange}
      id={id}
      name={id}
      type={type}
      min={min}
      max={max}
      value={value}
    />
  </div>
);

FilterInput.propTypes = {
  id: string.isRequired,
  label: string.isRequired,
  type: string.isRequired, 
  min: oneOfType([string, number]),
  max: oneOfType([string, number]), 
  value: oneOfType([string, number]),
  handleChange: func.isRequired
};

export default FilterInput;
