import React from 'react';
import { func, array, shape, string } from 'prop-types'
import AmazonItem from './AmazonItem';
import ItemFilter from './ItemFilter';

const Items = ({ filterValues, handleInputChange, items }) => (
  <main id="container">
    <ItemFilter
      filterValues={filterValues}
      handleFilterChange={handleInputChange}
      items={items}
    />
    {items.map(item => (
      <AmazonItem key={item.product_id} item={item} />
    ))}
  </main>
);

Items.propTypes = {
  handleInputChange: func.isRequired,
  filterValues: shape({
    itemLimit: string.isRequired, 
    minPrice: string.isRequired,
    maxPrice: string.isRequired, 
    sortby: string.isRequired
  }).isRequired,
  items: array.isRequired
}
export default Items;
