import React from "react";
import clsx from "clsx";

import css from "./FiltersBar.module.css";

const FiltersBar = () => {
  const HandleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    console.log("Form values: ", form.value.name);
  };

  return (
    <div className={css.container}>
      <form onSubmit={HandleSubmit} className={css.filtersForm}>
        <div className={css.mainWrapper}>
          <label className={clsx(css.checkboxWrapper, css.checkbox)}>
            <input type="checkbox" name="Transmition" id="transmition" />
            <span className={css.checkmark}></span>
            <span className={css.label}>Only Automatic</span>
          </label>
          <div className={css.selectWrapper}>
            <select name="class" id="class" className={css.select}>
              <option value="">Class</option>
              <option value="economy">Economy</option>
              <option value="compact">Compact</option>
              <option value="midsize">Midsize</option>
              <option value="full-size">Full Size</option>
              <option value="suv">SUV</option>
              <option value="luxury">Luxury</option>
              <option value="premium">Premium</option>
            </select>
          </div>
          <div className={css.selectWrapper}>
            <select name="Brand" id="brand" className={css.select}>
              <option value="">Brand</option>
              <option value="toyota">Toyota</option>
              <option value="nissan">Nissan</option>
              <option value="bmw">BMW</option>
              <option value="audi">Audi</option>
              <option value="volkswagen">Volkswagen</option>
              <option value="mercedes">Mercedes</option>
              <option value="lexus">Lexus</option>
              <option value="lamborghini">Lamborghini</option>
            </select>
          </div>
          <div className={css.selectWrapper}>
            <select name="Seats" id="seats" className={css.select}>
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
          <button type="reset" className={clsx(css.btn, css.resetBtn)}>
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
