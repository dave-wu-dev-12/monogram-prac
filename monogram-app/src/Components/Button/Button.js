import React from "react";
import "./Button.css";

function Button({ styleName, onClick, text }) {
  return (
    <>
      <button className={`${styleName}`} onClick={onClick}>
        {text}
      </button>
    </>
  );
}

export default Button;
