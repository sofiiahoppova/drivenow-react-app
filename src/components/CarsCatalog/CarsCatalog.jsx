import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import Loader from "../Loader/Loader";
import BasicCard from "../CarCards/BasicCard/BasicCard";
import Pagination from "./Pagination/Pagination";

import { fetchAllCars } from "../../redux/cars/operations";
import { selectDates } from "../../redux/dates/datesSlice";
import {
  selectAllCars,
  selectCarsError,
  selectCarsStatus,
  selectPagination,
} from "../../redux/cars/selectors";

import css from "./CarsCatalog.module.css";

const CarsCatalog = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  const [pickup, dropoff] = useSelector(selectDates);
  const cars = useSelector(selectAllCars);
  const pagination = useSelector(selectPagination);
  const carsStatus = useSelector(selectCarsStatus);
  const error = useSelector(selectCarsError);

  useEffect(() => {
    console.log(currentPage);
    dispatch(
      fetchAllCars({
        page: currentPage,
        perPage: 2,
        startDate: pickup,
        endDate: dropoff,
      })
    );
  }, [dispatch, currentPage]);

  useEffect(() => {
    window.scrollTo({
      top: 300,
      behavior: "smooth",
    });
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [pickup, dropoff]);

  let content;

  if (carsStatus == "loading") {
    content = <Loader />;
  } else if (carsStatus == "succeeded") {
    content = cars.map((car, index) => <BasicCard key={index} car={car} />);
  } else if (carsStatus == "failed") {
    toast.error(error);
  }

  return (
    <section className={css.container}>
      <div className={css.list}>{content}</div>
      <Pagination
        pages={pagination.totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};

export default CarsCatalog;
