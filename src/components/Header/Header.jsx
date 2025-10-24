import React from "react";
import css from "./Header.module.css";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <div className={css.container}>
      <Logo />
      <Navigation color="black" />
      <ul className={css.loginMenu}>
        <li>
          <p>Login</p>
        </li>
        <li>
          <p>|</p>
        </li>
        <li>
          <p>Register</p>
        </li>
      </ul>
    </div>
  );
};

export default Header;
