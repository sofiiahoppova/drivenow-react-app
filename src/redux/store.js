import { configureStore } from "@reduxjs/toolkit";

import datesReducer from "./dates/datesSlice.js";
import modalReducer from "./modal/modalSlice.js";
import carsReducer from "./cars/carsSlice.js";

const store = configureStore({
  reducer: {
    dates: datesReducer,
    modal: modalReducer,
    cars: carsReducer,
  },
});

export default store;
