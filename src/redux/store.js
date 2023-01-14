import { configureStore } from "@reduxjs/toolkit";

import filters from "./slices/filtersSlice.js";
import cart from "./slices/cartSlice.js";
import product from "./slices/productSlice.js";

export const store = configureStore({
  reducer: {
    filters,
    cart,
    product,
  },
});
