import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import DatesInputs from "../DatesInputs/DatesInputs";

import { setDates } from "../../../redux/filters/filtersSlice";
import { setClose } from "../../../redux/modal/modalSlice";

import css from "./SearchBarModal.module.css";

const SearchBarModal = ({ carId }) => {
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
    }
  };

  return (
    <form onSubmit={handleSearch} className={css.form}>
      <DatesInputs />
      <Link to={`/booking/${carId}`} className={css.btnWrapper}>
        <button
          className={css.button}
          type="submit"
          onClick={() => dispatch(setClose())}
        >
          Book Now
        </button>
      </Link>
    </form>
  );
};

export default SearchBarModal;
