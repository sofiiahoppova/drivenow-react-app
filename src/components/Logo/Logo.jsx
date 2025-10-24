import React from "react";
import css from "./Logo.module.css";
import clsx from "clsx";

const Logo = ({ color = "blue" }) => {
  return (
    <div className={clsx(color === "white" && css.logoWhite, css.logo)}>
      DriveNow
    </div>
  );
};

export default Logo;
