import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://drivenow-node-backend.onrender.com";

const instance = axios.create({
  baseURL: BASE_URL,
});

export const fetchAllCars = createAsyncThunk(
  "cars/fetchAllCars",
  async (filters, thunkAPI) => {
    try {
      const { data } = await instance.get("/cars", { params: { ...filters } });
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
      const { data } = await instance.get(`/cars/${carId}`);
      return data;
    } catch (error) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
      return thunkAPI.rejectWithValue(error.message || "Unknown error");
    }
  }
);
