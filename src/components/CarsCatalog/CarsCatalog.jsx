import css from "./CarsCatalog.module.css";
import React, { useState } from "react";

import BasicCarCard from "../BasicCarCard/BasicCarCard";
import Pagination from "./Pagination/Pagination";

const CarsCatalog = () => {
  const cards = Array.from({ length: 8 });
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <section className={css.list}>
      {cards.map((_, index) => (
        <BasicCarCard key={index} />
      ))}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </section>
  );
};

export default CarsCatalog;
