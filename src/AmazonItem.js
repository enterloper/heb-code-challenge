import React from "react";
import ItemTitle from "./ItemTitle";
import ItemDetails from "./ItemDetails";

const AmazonItem = props => {
  const { item } = props;
  return (
    <div className="item">
      <ItemTitle title={item.title} />
      <ItemDetails price={item.amzn_price} rating={item.rating} />
    </div>
  );
};

export default AmazonItem;
