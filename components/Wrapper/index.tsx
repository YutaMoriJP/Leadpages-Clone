import React from "react";
import style from "./style.module.css";

const Wrapper = ({ children }) => {
  return <div className={style.wrapper}>{children}</div>;
};

export default Wrapper;
