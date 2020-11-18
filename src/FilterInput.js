import React from "react";

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

export default FilterInput;
