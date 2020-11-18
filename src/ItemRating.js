import React from "react";

const ItemRating = ({ rating }) => {
  return (
    <div className="item_detail">
      <p>{rating ? `Rating: ${rating}` : "Rating unavailable"}</p>
    </div>
  );
};

export default ItemRating;
