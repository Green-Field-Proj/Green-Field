import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItems: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async (product, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/cart/add",
        product,
        {
          withCredentials: true,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
