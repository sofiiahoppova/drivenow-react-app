import { configureStore } from "@reduxjs/toolkit";

import datesReducer from "./dates/datesSlice.js";

const store = configureStore({
  reducer: {
    dates: datesReducer,
  },
});

export default store;
