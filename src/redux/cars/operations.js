import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllCars = createAsyncThunk(
  "cars/fetchAllCars",
  async (filters, thunkAPI) => {
    try {
      const { data } = await axios.get("/cars", { params: { ...filters } });
      return data;
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message || "Unknown error");
    }
  }
);

export const fetchCarById = createAsyncThunk(
  "cars/fetchCarById",
  async (carId, thunkAPI) => {
    try {
      const { data } = await axios.get(`/cars/${carId}`);
      return data;
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message || "Unknown error");
    }
  }
);
