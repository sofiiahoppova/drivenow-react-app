import React from "react";
import { useSelector } from "react-redux";

import { selectDates } from "../../../redux/filters/selectors";

import css from "./DatesInputs.module.css";

const DatesInputs = () => {
  const { startDate, endDate } = useSelector(selectDates);

  return (
    <div className={css.wrapper}>
      <div className={css.inputWrapper}>
        <label htmlFor="pickup-date">Pick-Up Date</label>
        <input
          className={css.dateInput}
          type="date"
          name="pickup"
          id="pickup-date"
          defaultValue={startDate}
        />
      </div>
      <div className={css.inputWrapper}>
        <label htmlFor="dropoff-date">Drop-Off Date</label>
        <input
          className={css.dateInput}
          type="date"
          name="dropoff"
          id="dropoff-date"
          defaultValue={endDate}
        />
      </div>
    </div>
  );
};

export default DatesInputs;
