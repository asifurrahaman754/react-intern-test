import { configureStore } from "@reduxjs/toolkit";
import Product from "./features/Product";
import Cart from "./features/Cart";

export const store = configureStore({
  reducer: {
    Product,
    Cart,
  },
});
