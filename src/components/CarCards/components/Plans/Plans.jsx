import React from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";

import { selectDates } from "../../../../redux/dates/datesSlice";

import css from "./Plans.module.css";
import car from "/src/components/CarCards/ExampleCarData.json";

const Plans = () => {
  const [pickup, dropoff] = useSelector(selectDates);

  const pickupDate = new Date(pickup);
  const dropoffDate = new Date(dropoff);

  const days = Math.max(1, (dropoffDate - pickupDate) / (1000 * 3600 * 24));

  let period = "";
  let basicPrice = 0;

  if (days <= 6) {
    period = "1-6 days";
    basicPrice = car.prices.dailyPrice;
  } else if (days <= 13) {
    period = "7-13 days";
    basicPrice = car.prices.weekendPrice;
  } else if (days <= 29) {
    period = "14-29 days";
    basicPrice = car.prices.weeklyPrice;
  } else {
    period = "30+ days";
    basicPrice = car.prices.monthlyPrice;
  }

  const coveragePrice = basicPrice + basicPrice * 0.3;

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
            <span className={css.boldText}>{basicPrice} $</span> / per day{" "}
            {`(${period})`}
          </p>
          <p className={css.price}>
            {basicPrice * days} $ for {days} days
          </p>
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
            <span className={css.boldText}>{coveragePrice} $</span> / per day{" "}
            {`(${period})`}
          </p>
          <p className={css.price}>
            {coveragePrice * days} $ for {days} days
          </p>
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
