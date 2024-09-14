import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

export const syncCart = createAsyncThunk(
  "cart/syncCart",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { auth, cart } = getState();
      if (auth.role) {
        const response = await axios.post(
          "http://localhost:3000/api/cart/sync",
          { items: cart.items },
          { withCredentials: true }
        );
        return response.data;
      }
      return cart.items;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action);

      const itemExists = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (itemExists) {
        itemExists.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    updateQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    loadCart: (state) => {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        state.items = JSON.parse(savedCart);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(syncCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(syncCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
        localStorage.setItem("cart", JSON.stringify(state.items));
      })
      .addCase(syncCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addToCart, removeFromCart, updateQuantity, loadCart } =
  cartSlice.actions;

export default cartSlice.reducer;
