import React from "react";
import "./PageHeader.css";
import { useSelector } from "react-redux";

function PageHeader() {
  const savedUserName = useSelector((state) => state.userName);

  return <div>{savedUserName}</div>;
}

export default PageHeader;
