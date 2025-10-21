import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => {
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
            About Us
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
