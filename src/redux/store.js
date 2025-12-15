import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/authSlice.js";
import usersReducer from "./user/usersSlice.js";
import carsReducer from "./cars/carsSlice.js";
import filtersReducer from "./filters/filtersSlice.js";
import modalReducer from "./modal/modalSlice.js";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// Persisting token field from auth slice to localstorage
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token", "isAuthenticated"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    user: usersReducer,
    cars: carsReducer,
    filters: filtersReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // devTools: process.env.NODE_ENV === 'production ',
});

export const persistor = persistStore(store);
