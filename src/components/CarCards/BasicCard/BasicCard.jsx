import React from "react";
import { useDispatch, useSelector } from "react-redux";

import PriceTable from "../components/PriceTable/PriceTable";
import Plans from "../components/Plans/Plans";
import CarFeaturesList from "../shared/CarFeaturesList/CarFeaturesList";

import { selectDates } from "../../../redux/dates/datesSlice";
import { setOpen } from "../../../redux/modal/modalSlice";

import css from "./BasicCard.module.css";

import car from "../ExampleCarData.json";

const BasicCard = () => {
  const dispatch = useDispatch();
  const selectedDates = useSelector(selectDates);

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
            <p className={css.rate}>{car.averageRating}</p>
            <button
              className={css.reviewsBtn}
              onClick={() =>
                dispatch(
                  setOpen({
                    component: "ReviewsList",
                    props: { reviews: car.reviews },
                  })
                )
              }
            >
              {car.reviewCount} reviews
            </button>
          </div>
        </div>
        <div className={css.classWrapper}>
          <p className={css.carClass}>{car.carClass}</p>
        </div>
      </div>
      <img src={car.imageUrl} alt={`${car.brand} ${car.model} photo`} />
      <CarFeaturesList car={car} />
      {selectedDates.length > 0 ? (
        <Plans />
      ) : (
        <PriceTable prices={car.prices} />
      )}
    </div>
  );
};

export default BasicCard;
