import React from "react";
import css from "./CarsCatalog.module.css";
import BasicCarCard from "../BasicCarCard/BasicCarCard";

const CarsCatalog = () => {
  const cards = Array.from({ length: 8 });
  return (
    <section className={css.list}>
      {cards.map((_, index) => (
        <BasicCarCard key={index} />
      ))}
    </section>
  );
};

export default CarsCatalog;
