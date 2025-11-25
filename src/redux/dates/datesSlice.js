import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const datesSlice = createSlice({
  name: "dates",
  initialState,
  reducers: {
    datesAdded(state, action) {
      return action.payload;
    },
  },
});

export const selectDates = (state) => state.dates;

export const { datesAdded } = datesSlice.actions;

export default datesSlice.reducer;
