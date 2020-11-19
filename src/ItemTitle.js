import React from 'react';
import { string } from 'prop-types';

const ItemTitle = ({ title }) => (
  <div className="item_title">
    <h4>{title}</h4>
  </div>
);

ItemTitle.propTypes = {
  title: string.isRequired
};

export default ItemTitle;
