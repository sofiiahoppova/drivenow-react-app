import React, { useState } from "react";

import BasicCarCard from "../BasicCarCard/BasicCarCard";
import Pagination from "./Pagination/Pagination";

import css from "./CarsCatalog.module.css";

const CarsCatalog = ({ selectedDates }) => {
  const cards = Array.from({ length: 8 });
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className={css.container}>
      <div className={css.list}>
        {cards.map((_, index) => (
          <BasicCarCard key={index} selectedDates={selectedDates} />
        ))}
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </section>
  );
};

export default CarsCatalog;
