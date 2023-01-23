import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import filters from "./slices/filtersSlice";
import cart from "./slices/cartSlice";
import product from "./slices/productSlice";

export const store = configureStore({
  reducer: {
    filters,
    cart,
    product,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
