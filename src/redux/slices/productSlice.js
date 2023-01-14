import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import ProductsAPI from "../../dal/ProductsAPI.js";
import { LOADING, SUCCESS, ERROR } from "../../constants.js";

const initialState = {
  items: [],
  status: LOADING,
  totalPages: 0,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProductsStatus",
  async (params) => {
    const { typeId, selectedSort, searchValue, currentPage } = params;
    let response = await ProductsAPI.getProducts(
      typeId,
      selectedSort,
      searchValue,
      currentPage
    );

    return response.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = LOADING;
      state.items = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = SUCCESS;
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
