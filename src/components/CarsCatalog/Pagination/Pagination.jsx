import React from "react";
import clsx from "clsx";

import css from "./Pagination.module.css";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const pagesCount = Array.from({ length: pages }, (_, i) => i + 1);

  return (
    <div className={css.container}>
      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        className={css.chevron}
        disabled={currentPage <= 1}
        aria-label="Previous page"
      >
        <svg className={css.icon} width={10} height={16}>
          <use href="/sprite.svg#icon-chevron-left"></use>
        </svg>
      </button>
      <ul className={css.wrapper}>
        {pagesCount.map((page) => (
          <li
            key={page}
            className={clsx(page == currentPage && css.current, css.btnWrapper)}
            onClick={() => setCurrentPage(page)}
          >
            <button
              className={clsx(page == currentPage && css.currentBtn, css.btn)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        className={css.chevron}
        disabled={currentPage >= pages}
        aria-label="Next page"
      >
        <svg className={css.icon} width={10} height={16}>
          <use href="/sprite.svg#icon-chevron-right"></use>
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
