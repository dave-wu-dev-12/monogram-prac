import React, { useState } from "react";
import Star from "./Star/Star";
import "./StarRating.css";

function StarRating({ count = 5, selectedStar = 0, onSelect = (f) => f }) {
  let starList = [...Array(count)];

  return (
    <div className="starListContainer">
      {starList.map((item, i) => (
        <Star
          key={i}
          onSelect={() => onSelect(i + 1)}
          selected={selectedStar > i}
        />
      ))}
    </div>
  );
}

export default StarRating;
