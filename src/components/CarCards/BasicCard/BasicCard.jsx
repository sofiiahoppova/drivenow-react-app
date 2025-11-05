import React from "react";

import PriceTable from "../components/PriceTable/PriceTable";
import Plans from "../components/Plans/Plans";

import css from "./BasicCard.module.css";

import car from "../ExampleCarData.json";
import CarFeaturesList from "../shared/CarFeaturesList/CarFeaturesList";

const BasicCard = ({ selectedDates }) => {
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
      <CarFeaturesList car={car} />
      {selectedDates ? (
        <Plans />
      ) : (
        <PriceTable price_per_day={car.price_per_day} />
      )}
    </div>
  );
};

export default BasicCard;
