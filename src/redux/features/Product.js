import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: "",
  attribute: {},
  searchValue: "",
};

export const Product = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setAttribute: (state, action) => {
      state.attribute = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategory, setAttribute, setSearchValue } = Product.actions;

export default Product.reducer;
