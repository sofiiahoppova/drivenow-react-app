import React from "react";

import css from "./SearchBar.module.css";

const OnSearch = (formData) => {
  const pickupDate = formData.get("pickup");
  const dropoffDate = formData.get("dropoff");
  console.log(pickupDate, dropoffDate);
};

const SearchBar = () => {
  return (
    <div className={css.container}>
      <form action={OnSearch} className={css.form}>
        <div className={css.wrapper}>
          <div className={css.inputWrapper}>
            <label htmlFor="pickup-date">Pick-Up Date</label>
            <input
              className={css.dateInput}
              type="date"
              name="pickup"
              id="pickup-date"
            />
          </div>
          <div className={css.inputWrapper}>
            <label htmlFor="dropoff-date">Drop-Off Date</label>
            <input
              className={css.dateInput}
              type="date"
              name="dropoff"
              id="dropoff-date"
            />
          </div>
        </div>
        <button className={css.button} type="submit">
          <svg className={css.icon} width={20} height={20}>
            <use href="/sprite.svg#icon-search"></use>
          </svg>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
