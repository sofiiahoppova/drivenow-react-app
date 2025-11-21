import React, { useState } from "react";

import BasicCard from "../CarCards/BasicCard/BasicCard";
import Pagination from "./Pagination/Pagination";

import css from "./CarsCatalog.module.css";

const CarsCatalog = ({ selectedDates, isModal, setModal }) => {
  const cards = Array.from({ length: 8 });
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className={css.container}>
      <div className={css.list}>
        {cards.map((_, index) => (
          <BasicCard
            key={index}
            selectedDates={selectedDates}
            isModal={isModal}
            setModal={setModal}
          />
        ))}
      </div>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </section>
  );
};

export default CarsCatalog;
