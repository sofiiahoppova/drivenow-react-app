import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";

import DatesInputs from "../DatesInputs/DatesInputs";

import { setDates } from "../../../redux/filters/filtersSlice";
import { setClose } from "../../../redux/modal/modalSlice";

import css from "./SearchBarModal.module.css";

const SearchBarModal = ({ carId }) => {
  const navigate = useNavigate();
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
      localStorage.setItem("startDate", pickupDate);
      localStorage.setItem("endDate", dropoffDate);

      toast.success("Dates selected successfully!");
      dispatch(setClose());
      navigate(`/booking/${carId}?plan=basic`);
    }
  };

  return (
    <form onSubmit={handleSearch} className={css.form}>
      <DatesInputs />
      <div className={css.btnWrapper}>
        <button className={css.button} type="submit">
          Book Now
        </button>
      </div>
    </form>
  );
};

export default SearchBarModal;
