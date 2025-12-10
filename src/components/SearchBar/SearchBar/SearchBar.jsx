import React from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import DatesInputs from "../DatesInputs/DatesInputs";

import { setDates } from "../../../redux/filters/filtersSlice";

import css from "./SearchBar.module.css";

const SearchBar = () => {
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
      dispatch(setDates([pickupDate, dropoffDate]));

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
        <DatesInputs />
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
