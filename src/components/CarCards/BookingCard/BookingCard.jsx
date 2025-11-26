import React from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "clsx";

import { selectDates } from "../../../redux/dates/datesSlice";
import { calculateDays } from "/src/utils/calculateDays";
import { calculatePrice } from "../../../utils/calculatePrice";

import css from "./BookingCard.module.css";

import car from "../ExampleCarData.json";

const BookingCard = () => {
  const carId = useParams(); //to get the car by id
  const [searchParams] = useSearchParams();
  const plan = searchParams.get("plan");

  const [pickup, dropoff] = useSelector(selectDates);
  const days = calculateDays(pickup, dropoff);
  const price = calculatePrice(car, days, plan);

  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.titleWrapper}>
          <h3 className={css.title}>
            {car.brand} <span className={css.lightTitle}>{car.model}</span>
          </h3>
          <div className={css.classWrapper}>
            <p className={css.carClass}>{car.carClass}</p>
          </div>
        </div>
        <img
          src={car.imageUrl}
          alt={`${car.brand} ${car.model} photo`}
          className={css.image}
        />
      </div>
      <span className={css.divider} />
      <div className={css.priceWrapper}>
        <p className={css.text}>
          {car.brand} {car.model}{" "}
          <span className={css.bold}>{price.dailyRate} $</span> x{" "}
          <span className={css.bold}>{days} days</span>
        </p>
        <p className={css.bold}>{price.base} $</p>
      </div>
      <span className={css.divider} />

      <div className={css.priceWrapper}>
        <p className={css.text}>
          {plan == "full" ? "Full covarage" : "Basic plan"}
        </p>
        <span className={css.bold}>{price.coveragePrice} $</span>
      </div>
      <div className={css.priceWrapper}>
        <p className={css.text}>Deposit</p>
        <span
          className={clsx(
            css.bold,
            plan === "full" ? css.accentGreen : css.accentRed
          )}
        >
          {price.deposit} $
        </span>
      </div>

      <span className={css.divider} />
      <div className={css.priceWrapper}>
        <p className={css.total}>Total</p>
        <span className={css.total}>{price.total} $</span>
      </div>
      <button className={css.bookBtn} type="submit">
        Confirm booking
      </button>
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
