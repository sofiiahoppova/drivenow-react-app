import React from "react";
import css from "./Footer.module.css";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

const Footer = () => {
  return (
    <footer className={css.container}>
      <div className={css.mainWrapper}>
        <div className={css.titleWrapper}>
          <Logo color="white" />
          <p className={css.description}>
            DriveNow is where comfort meets style. Choose your car, hit the
            road, and make every trip unforgettable.
          </p>
        </div>
        <Navigation color="white" />
      </div>
      <span className={css.line} />
      <div className={css.secondWrapper}>
        <p className={css.description}>
          &#169; 2025 DriveNow Car Rental. All rights reserved.
        </p>
        <ul className={css.iconsList}>
          <li>
            <svg className={css.icon} width={24} height={24}>
              <use href="/sprite.svg#icon-facebook"></use>
            </svg>
          </li>
          <li>
            <svg className={css.icon} width={24} height={24}>
              <use href="/sprite.svg#icon-instagram"></use>
            </svg>
          </li>
          <li>
            <svg className={css.icon} width={24} height={24}>
              <use href="/sprite.svg#icon-whatsapp"></use>
            </svg>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
