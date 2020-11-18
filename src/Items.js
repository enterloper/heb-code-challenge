import React from "react";
import AmazonItem from "./AmazonItem";
import ItemFilter from "./ItemFilter";

const Items = ({ filterValues, handleInputChange, items }) => (
  <main id="container">
    <ItemFilter
      filterValues={filterValues}
      handleFilterChange={handleInputChange}
    />
    {items.map(item => (
      <AmazonItem key={item.product_id} item={item} />
    ))}
  </main>
);

export default Items;
