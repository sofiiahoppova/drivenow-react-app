import React from "react";
import clsx from "clsx";

import css from "./Plans.module.css";

const Plans = () => {
  return (
    <ul className={css.container}>
      <li className={css.item}>
        <div className={css.wrapper}>
          <div className={css.titleWrapper}>
            <h3 className={css.title}>Basic Plan</h3>
            <a href="/policies#plans" className={css.link}>
              <svg className={css.icon} width={20} height={20}>
                <use href="/sprite.svg#icon-info"></use>
              </svg>
            </a>
          </div>

          <p className={css.text}>
            <span className={css.boldText}>120 $</span> / per day (1-3 days)
          </p>
          <p className={css.price}>240 $ for 2 days</p>
          <div className={css.depositWrapper}>
            <p className={css.deposit}>
              Deposit: <span className={css.accentRed}>700 $</span>
            </p>
          </div>
        </div>
        <button className={css.bookBtn}>Book Now</button>
      </li>
      <li className={css.item}>
        <div className={css.wrapper}>
          <div className={css.titleWrapper}>
            <h3 className={css.title}>Full Coverage</h3>
            <a href="/policies#plans" className={css.link}>
              <svg className={css.icon} width={20} height={20}>
                <use href="/sprite.svg#icon-info"></use>
              </svg>
            </a>
          </div>

          <p className={css.text}>
            <span className={css.boldText}>160 $</span> / per day (1-3 days)
          </p>
          <p className={css.price}>320 $ for 2 days</p>
          <div className={css.depositWrapper}>
            <p className={css.deposit}>
              Deposit: <span className={css.accentGreen}>FREE</span>
            </p>
          </div>
        </div>
        <button className={clsx(css.bookBtn, css.accentBtn)}>Book Now</button>
      </li>
    </ul>
  );
};

export default Plans;
