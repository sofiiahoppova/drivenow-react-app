import React from "react";
import clsx from "clsx";

import css from "./FiltersBar.module.css";
import { useDispatch } from "react-redux";
import { resetFilters, setFilter } from "../../redux/filters/filtersSlice";

const FiltersBar = ({ filter }) => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target.elements;
    dispatch(
      setFilter({
        brand: form.brand.value || null,
        seats: form.seats.value || null,
        transmission: form.transmission.checked ? "automatic" : null,
        carClass: form.class.value || null,
      })
    );
  };

  const handleReset = () => {
    dispatch(resetFilters());
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.filtersForm}>
        <div className={css.mainWrapper}>
          <label className={clsx(css.checkboxWrapper, css.checkbox)}>
            <input type="checkbox" name="transmission" id="transmission" />
            <span className={css.checkmark}></span>
            <span className={css.label}>Only Automatic</span>
          </label>
          <div className={css.selectWrapper}>
            <select name="class" id="class" className={css.select}>
              <option value="">Class</option>
              <option value="economy">Economy</option>
              <option value="compact">Compact</option>
              <option value="midsize">Midsize</option>
              <option value="SUV">SUV</option>
              <option value="premium">Premium</option>
            </select>
          </div>
          <div className={css.selectWrapper}>
            <select
              name="brand"
              id="brand"
              className={css.select}
              defaultValue={filter}
            >
              <option value="">Brand</option>
              <option value="Fiat">Fiat</option>
              <option value="Toyota">Toyota</option>
              <option value="Nissan">Nissan</option>
              <option value="BMW">BMW</option>
              <option value="Audi">Audi</option>
              <option value="Volkswagen">Volkswagen</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Lexus">Lexus</option>
              <option value="Lamborghini">Lamborghini</option>
            </select>
          </div>
          <div className={css.selectWrapper}>
            <select name="seats" id="seats" className={css.select}>
              <option value="">Seats</option>
              <option value="2">2 seats</option>
              <option value="4">4 seats</option>
              <option value="5">5 seats</option>
              <option value="7">7 seats</option>
              <option value="8">8 seats</option>
            </select>
          </div>
        </div>
        <div className={css.buttonsWrapper}>
          <button
            type="reset"
            onClick={handleReset}
            className={clsx(css.btn, css.resetBtn)}
          >
            ResetAll
          </button>
          <button type="submit" className={clsx(css.btn, css.submitBtn)}>
            Filter
            <svg className={css.icon} width={24} height={24}>
              <use href="/sprite.svg#icon-filter"></use>
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default FiltersBar;
