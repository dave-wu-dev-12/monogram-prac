import React from "react";
import "./Input.css";

function Input({ styleName, type, placeholder, label, value, onChange }) {
  return (
    <>
      <label>{label}</label>
      <input
        className={styleName}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}

export default Input;
