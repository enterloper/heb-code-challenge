import React from "react";
import FilterInput from "./FilterInput";
import SortSelection from "./SortSelection";

const ItemFilter = ({ filterValues, handleFilterChange }) => {
  const { itemLimit, minPrice, maxPrice } = filterValues;
  return (
    <div id="item_filter">
      <div className="filter_input_wrapper">
        <FilterInput
          label="Number of items:"
          handleChange={handleFilterChange}
          id="itemLimit"
          type="number"
          min="5"
          max="200"
          value={itemLimit}
        />
        <FilterInput
          label="Mimimum Price:"
          handleChange={handleFilterChange}
          id="minPrice"
          type="number"
          min="1"
          max={Number(maxPrice) - 1}
          value={minPrice}
        />
        <FilterInput
          label="Maximum Price:"
          handleChange={handleFilterChange}
          id="maxPrice"
          type="number"
          min={Number(minPrice) + 1}
          value={maxPrice}
        />
      </div>
      <SortSelection handleChange={handleFilterChange} id="sortby" />
    </div>
  );
};
export default ItemFilter;
