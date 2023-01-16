import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import ProductsAPI from "../../dal/ProductsAPI.js";
import { LOADING, SUCCESS, ERROR } from "../../constants.js";

const initialState = {
  items: [],
  item: {},
  status: LOADING,
  totalPages: 0,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProductsStatus",
  async (params) => {
    const { typeId, selectedSort, searchValue, currentPage } = params;
    let response = await ProductsAPI.getProducts(
      typeId,
      selectedSort.sortedType,
      searchValue,
      currentPage
    );

    return response.data;
  }
);
export const fetchProductById = createAsyncThunk(
  "products/fetchProductByIdStatus",
  async (id) => {
    let response = await ProductsAPI.getProductById(id);
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
      state.totalPages = Math.floor(action.payload.length / 8);
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = ERROR;
    });
    builder.addCase(fetchProductById.pending, (state) => {
      state.status = LOADING;
      state.item = {};
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.item = action.payload;
      state.status = SUCCESS;
    });
    builder.addCase(fetchProductById.rejected, (state) => {
      state.status = ERROR;
      state.item = {};
    });
  },
});

export const selectorProduct = (state) => state.product;

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
