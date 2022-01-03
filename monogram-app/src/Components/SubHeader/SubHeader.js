import React from "react";
import "./SubHeader.css";

function SubHeader({ styleName, text }) {
  return <h4 className={styleName}>{text}</h4>;
}

export default SubHeader;
