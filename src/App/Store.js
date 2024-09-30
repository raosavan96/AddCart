import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Features/CartSlice/CartSlice";
import wishReducer from "../Features/WishSlice/WishSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wish: wishReducer
  }
});
