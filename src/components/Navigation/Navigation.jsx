import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

const Navigation = ({ color }) => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(
      css.link,
      css.link,
      color === "black" && css.linkBlack,
      color === "white" && css.linkWhite,
      isActive && (color === "black" ? css.activeBlue : css.activeWhite)
    );
  };

  return (
    <nav>
      <ul className={css.navList}>
        <li className={css.item}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/aboutus" className={buildLinkClass}>
            AboutUs
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/policies" className={buildLinkClass}>
            Policies
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to="/autopark" className={buildLinkClass}>
            AutoPark
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
