import React from "react";
import toast from "react-hot-toast";

import css from "./SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { datesAdded, selectDates } from "../../redux/dates/datesSlice";

const SearchBar = () => {
  const dates = useSelector(selectDates);
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault();
    const form = event.target;
    const pickupDate = form.pickup.value;
    const dropoffDate = form.dropoff.value;
    const dateNow = Date.now();
    const today = new Date(dateNow);

    if (pickupDate >= dropoffDate) {
      toast.error("Pick up date should be earlier than drop off date.");
    } else if (pickupDate < today.toISOString().split("T")[0]) {
      toast.error("Pick up date shouldn't be earliar than today");
    } else {
      dispatch(datesAdded([pickupDate, dropoffDate]));

      toast.success("Dates selected successfully!");

      window.scrollTo({
        top: 300,
        behavior: "smooth",
      });
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
              defaultValue={dates[0]}
            />
          </div>
          <div className={css.inputWrapper}>
            <label htmlFor="dropoff-date">Drop-Off Date</label>
            <input
              className={css.dateInput}
              type="date"
              name="dropoff"
              id="dropoff-date"
              defaultValue={dates[1]}
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
