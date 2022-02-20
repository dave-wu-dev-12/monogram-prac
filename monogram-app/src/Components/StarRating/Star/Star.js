import React from "react";
import "./Star.css";
import { FaStar } from "react-icons/fa";

function Star({ selected = false, onSelect = (f) => f }) {
  return (
    <div>
      <FaStar className={selected ? "red" : "gray"} onClick={onSelect} />
    </div>
  );
}

export default Star;
