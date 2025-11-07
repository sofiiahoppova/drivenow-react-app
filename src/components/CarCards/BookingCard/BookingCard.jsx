import React, { useEffect, useState } from "react";
import clsx from "clsx";
import toast from "react-hot-toast";

import CarFeaturesList from "../shared/CarFeaturesList/CarFeaturesList";

import css from "./BookingCard.module.css";

import car from "../ExampleCarData.json";

const BookingCard = ({ plan = "Full coverage", days = 4 }) => {
  const [basicPrice, setBasicPrice] = useState(0);
  const [coveragePrice, setCoveragePrice] = useState(0);
  const [deposit, setDeposit] = useState(0);

  useEffect(() => {
    if (!car || !days) return;

    let base = 0;
    if (days <= 6) base = car.price_per_day["1to6_days"] * days;
    else if (days <= 13) base = car.price_per_day["7to13_days"] * days;
    else if (days <= 29) base = car.price_per_day["14to29_days"] * days;
    else if (days >= 30) base = car.price_per_day["30+_days"] * days;
    else {
      toast.error("Selected dates are invalid");
      return;
    }

    setBasicPrice(base);

    if (plan === "Full coverage") {
      setCoveragePrice(base * 0.3);
      setDeposit(0);
    } else {
      setCoveragePrice(0);
      setDeposit(700);
    }
  }, [days, plan, car]);

  const totalPrice = basicPrice + coveragePrice + deposit;

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <img
          src={car.image_url}
          alt={`${car.brand} ${car.model} photo`}
          className={css.image}
        />
        <div className={css.titleWrapper}>
          <h3 className={css.title}>
            {car.brand} <span className={css.lightTitle}>{car.model}</span>
          </h3>
          <div className={css.classWrapper}>
            <p className={css.carClass}>{car.class}</p>
          </div>
        </div>
      </div>
      <CarFeaturesList car={car} size={"small"} />
      <span className={css.divider} />
      <div className={css.priceWrapper}>
        <p className={css.text}>
          {car.brand} {car.model}{" "}
          <span className={css.bold}>{car.price_per_day["1to6_days"]} $</span> x{" "}
          <span className={css.bold}>{days} days</span>
        </p>
        <p className={css.bold}>{basicPrice} $</p>
      </div>
      <span className={css.divider} />

      <div className={css.priceWrapper}>
        <p className={css.text}>{plan}</p>
        <span className={css.bold}>{coveragePrice} $</span>
      </div>
      <div className={css.priceWrapper}>
        <p className={css.text}>Deposit</p>
        <span
          className={clsx(
            css.bold,
            plan === "Full coverage" ? css.accentGreen : css.accentRed
          )}
        >
          {deposit} $
        </span>
      </div>

      <span className={css.divider} />
      <div className={css.priceWrapper}>
        <p className={css.total}>Total</p>
        <span className={css.total}>{totalPrice} $</span>
      </div>
      <button className={css.bookBtn}>Confirm booking</button>
      <div className={css.inputWrapper}>
        <input
          type="checkbox"
          name="agreement"
          id="agreement"
          className={css.checkBox}
        />
        <label htmlFor="agreement" className={css.label}>
          By confirming your booking, you agree to our Terms of Use, Rental
          Agreement, and Privacy Policy.
        </label>
      </div>
    </div>
  );
};

export default BookingCard;
