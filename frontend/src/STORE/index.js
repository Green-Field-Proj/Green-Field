import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/AuthSlice";
import cartReducer from "../features/Cartslice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
});
