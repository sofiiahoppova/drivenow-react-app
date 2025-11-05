import React from "react";

import css from "./CarFeaturesList.module.css";

const CarFeaturesList = ({ car }) => {
  return (
    <ul className={css.list}>
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
        <p className={css.caracteristic}>{car.consumption_per_100km}l /100km</p>
      </li>
    </ul>
  );
};

export default CarFeaturesList;
