import React, { useEffect } from "react";

import css from "./Modal.module.css";

const Modal = ({ children, isModalOpen, setIsModalOpen }) => {
  return (
    <div className={css.overlay}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={css.closeButton}
          onClick={() => setIsModalOpen(false)}
        >
          ✕
        </button>
        <div className={css.contentWrapper}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
