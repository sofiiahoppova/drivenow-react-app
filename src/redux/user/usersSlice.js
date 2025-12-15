import { createSlice } from "@reduxjs/toolkit";
import { fetchUserMe, updateUserMe } from "./operations";

const initialState = { user: null, status: "idle", error: null };

export const carsSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserMe.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserMe.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.data;
      })
      .addCase(fetchUserMe.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(updateUserMe.pending, (state, action) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateUserMe.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(updateUserMe.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default carsSlice.reducer;
