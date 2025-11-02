import React from "react";
import toast from "react-hot-toast";

import css from "./SearchBar.module.css";

const SearchBar = ({ setDates }) => {
  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const pickupDate = form.pickup.value;
    const dropoffDate = form.dropoff.value;

    const pickup = new Date(pickupDate);
    const dropoff = new Date(dropoffDate);

    if (pickup < dropoff) {
      setDates([pickupDate, dropoffDate]);
      toast.success("Dates selected successfully!");

      window.scrollTo({
        top: 300,
        behavior: "smooth",
      });
    } else {
      toast.error("First date should be earlier than second.");
    }
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSearch} className={css.form}>
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
