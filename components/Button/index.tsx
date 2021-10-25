import React from "react";
import style from "./style.module.css";
type ButtonProps = { reversed?: boolean } & React.ComponentProps<"button">;

const Button = ({ children, reversed = false, ...rest }: ButtonProps) => {
  return (
    <button className={reversed ? style.reversed : style.button} {...rest}>
      {children}
    </button>
  );
};

export default Button;
