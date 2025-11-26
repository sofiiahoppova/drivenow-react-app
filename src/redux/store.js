import { configureStore } from "@reduxjs/toolkit";

import datesReducer from "./dates/datesSlice.js";
import modalReducer from "./modal/modalSlice.js";

const store = configureStore({
  reducer: {
    dates: datesReducer,
    modal: modalReducer,
  },
});

export default store;
