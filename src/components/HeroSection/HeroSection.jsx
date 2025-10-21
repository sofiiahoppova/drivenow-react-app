import React from "react";
import css from "./HeroSection.module.css";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className={css.container}>
      <div className={css.wrapper}>
        <h1 className={css.title}>Rent a car. Easy. Safe. Reliable.</h1>
        <h2 className={css.description}>
          Travel in comfort — from city rides to long trips, choose the car that
          fits your journey.
        </h2>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <a href="" className={css.link}>
            Register
          </a>
        </li>
        <li className={css.item}>
          <NavLink className={css.link} to="/autopark">
            Book a car
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default HeroSection;
