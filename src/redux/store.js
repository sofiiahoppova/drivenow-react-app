import { configureStore } from "@reduxjs/toolkit";

import filtersReducer from "./filters/filtersSlice.js";
import modalReducer from "./modal/modalSlice.js";
import carsReducer from "./cars/carsSlice.js";

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    modal: modalReducer,
    cars: carsReducer,
  },
});

export default store;
