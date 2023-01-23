import { getCartProductLS } from "../../utils";
import { RootState } from "./../store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: ICartSliceState = {
  products: getCartProductLS().products,
  totalPrice: getCartProductLS().totalPrice,
  totalCount: getCartProductLS().totalCount,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartItemType>) => {
      const findProduct = state.products.find(
        (product) =>
          product.id === action.payload.id &&
          product.method === action.payload.method &&
          product.size === action.payload.size
      );
      if (findProduct && action.payload.add) {
        findProduct.count && findProduct.count++;
      } else if (findProduct && !action.payload.add) {
        findProduct.count && findProduct.count--;
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
    removeProduct: (state, action: PayloadAction<CartItemType>) => {
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

export const selectorCart = (state: RootState) => state.cart;

export const { addProduct, removeProduct, clearProducts } = cartSlice.actions;

export default cartSlice.reducer;
