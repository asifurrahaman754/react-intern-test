import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const Cart = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setProductToCart: (state, action) => {
      if (action.payload === "reset") {
        state.cartItems = [];
      } else {
        state.cartItems = [...state.cartItems, action.payload];
      }
    },
    removeProductFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    changeProductQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      state.cartItems = state.cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity, subtotal: item.price * quantity };
        }
        return item;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setProductToCart,
  removeProductFromCart,
  changeProductQuantity,
} = Cart.actions;

export default Cart.reducer;
