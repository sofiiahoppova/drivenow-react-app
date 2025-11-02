import React from "react";

import PriceTable from "./components/PriceTable";
import Plans from "./components/Plans";

import css from "./BasicCarCard.module.css";

import car from "./ExampleCarData.json";

const BasicCarCard = ({ selectedDates }) => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <div className={css.titleWrapper}>
          <h3 className={css.title}>
            {car.brand} <span className={css.lightTitle}>{car.model}</span>
          </h3>
          <div className={css.reviewsWrapper}>
            <svg className={css.icon} width={24} height={24}>
              <use href="/sprite.svg#icon-star"></use>
            </svg>
            <p className={css.rate}>{car.rating}</p>
            <button className={css.reviewsBtn}>
              {car.reviews_count} reviews
            </button>
          </div>
        </div>
        <div className={css.classWrapper}>
          <p className={css.carClass}>{car.class}</p>
        </div>
      </div>
      <img src={car.image_url} alt={`${car.brand} ${car.model} photo`} />
      <ul className={css.caracteristicsList}>
        <li className={css.listItem}>
          <p className={css.caracteristic}>{car.year}</p>
        </li>
        <li className={css.listItem}>
          <svg className={css.icon} width={24} height={24}>
            <use href="/sprite.svg#icon-seat"></use>
          </svg>
          <p className={css.caracteristic}>{car.seats}</p>
        </li>
        <li className={css.listItem}>
          <svg className={css.icon} width={24} height={24}>
            <use href="/sprite.svg#icon-gas"></use>
          </svg>
          <p className={css.caracteristic}>{car.fuel_type}</p>
        </li>
        <li className={css.listItem}>
          <svg className={css.icon} width={24} height={24}>
            <use href="/sprite.svg#icon-AT"></use>
          </svg>
          <p className={css.caracteristic}>{car.transmission}</p>
        </li>
        <li className={css.listItem}>
          <svg className={css.icon} width={24} height={24}>
            <use href="/sprite.svg#icon-can"></use>
          </svg>
          <p className={css.caracteristic}>
            {car.consumption_per_100km}l /100km
          </p>
        </li>
      </ul>
      {selectedDates ? (
        <Plans />
      ) : (
        <PriceTable price_per_day={car.price_per_day} />
      )}
    </div>
  );
};

export default BasicCarCard;
