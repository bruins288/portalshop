import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalPrice: 0,
  totalCount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const findProduct = state.products.find(
        (product) =>
          product.id === action.payload.id &&
          product.method === action.payload.method &&
          product.size === action.payload.size
      );
      if (findProduct && action.payload.add) {
        findProduct.count++;
      } else if (findProduct && !action.payload.add) {
        findProduct.count--;
      } else {
        state.products.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.products.reduce(
        (sum, product) => sum + product.price * product.count,
        0
      );
      state.totalCount = state.products.reduce(
        (sum, product) => sum + product.count,
        0
      );
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) =>
          product.id !== action.payload.id ||
          product.method !== action.payload.method ||
          product.size !== action.payload.size
      );
      state.totalPrice = state.products.reduce(
        (sum, product) => sum + product.price * product.count,
        0
      );
      state.totalCount = state.products.reduce(
        (sum, product) => sum + product.count,
        0
      );
    },
    clearProducts: (state) => {
      state.products = [];
      state.totalPrice = 0;
      state.totalCount = 0;
    },
  },
});

export const selectorCart = (state) => state.cart;

export const { addProduct, removeProduct, clearProducts } = cartSlice.actions;

export default cartSlice.reducer;
