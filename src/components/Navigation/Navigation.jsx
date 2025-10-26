import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

const Navigation = ({ color, onClose, isMobile }) => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(
      css.link,
      color === "black" && css.linkBlack,
      color === "white" && css.linkWhite,
      isActive && (color === "black" ? css.activeBlue : css.activeWhite)
    );
  };

  return (
    <div
      className={clsx(
        css.container,
        isMobile && css.mobile,
        !isMobile && css.hidden
      )}
      onClick={onClose}
    >
      <button className={css.closeButton} onClick={onClose}>
        ✕
      </button>
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
      <ul className={css.auth}>
        <li>
          <NavLink to="/login" className={css.link}>
            Login
          </NavLink>
        </li>
        <li>|</li>
        <li>
          <NavLink to="/register" className={css.link}>
            Register
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
