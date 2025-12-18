import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/authSlice.js";
import usersReducer from "./user/usersSlice.js";
import carsReducer from "./cars/carsSlice.js";
import filtersReducer from "./filters/filtersSlice.js";
import modalReducer from "./modal/modalSlice.js";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: usersReducer,
    cars: carsReducer,
    filters: filtersReducer,
    modal: modalReducer,
  },
});
