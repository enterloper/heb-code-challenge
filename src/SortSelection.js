import React from "react";

const sortOptions = [
  { value: "priceLowHigh", label: "Price: Lowest to highest" },
  { value: "priceHighLow", label: "Price: Highest to lowest" },
  { value: "ratingHighLow", label: "Rating: Highest to lowest" },
  { value: "ratingLowHigh", label: "Rating: Lowest to highest" }
];

const SortSelection = ({ id, handleChange }) => (
  <label htmlFor={id}>
    Sort by:
    <select onChange={handleChange} id={id} name={id}>
      {sortOptions.map(({ label, value }) => (
        <option value={value}>{label}</option>
      ))}
    </select>
  </label>
);

export default SortSelection;
