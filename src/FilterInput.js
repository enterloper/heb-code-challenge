import React from 'react';
import {string, number, oneOfType, func} from 'prop-types';

const FilterInput = ({ id, label, type, min, max, value, handleChange }) => (
  <label htmlFor={id}>
    {label}
    <input
      onChange={handleChange}
      id={id}
      name={id}
      type={type}
      min={min}
      max={max}
      value={value}
    />
  </label>
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
