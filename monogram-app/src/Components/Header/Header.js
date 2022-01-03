import React from "react";
import "./Header.css";

function Header({ styleName, text }) {
  return <h2 className={styleName}>{text}</h2>;
}

export default Header;
