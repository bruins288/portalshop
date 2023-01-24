import { RootState } from "./../store";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import ProductsAPI from "../../dal/ProductsAPI";

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

const initialState: IProductSlice = {
  items: [],
  item: {} as CardPropsType,
  status: Status.LOADING,
  totalPages: 0,
};

export const fetchProducts = createAsyncThunk<
  CardPropsType[],
  FetchProductType
>("products/fetchProductsStatus", async (params: FetchProductType) => {
  const { typeId, selectedSort, searchValue, currentPage } = params;
  let { data } = await ProductsAPI.getProducts(
    typeId,
    selectedSort.sortedType,
    searchValue,
    currentPage
  );
  // headers["x-total-count"];
  return data;
});
export const fetchProductById = createAsyncThunk(
  "products/fetchProductByIdStatus",
  async (id: number) => {
    let { data } = await ProductsAPI.getProductById(id);
    return data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<CardPropsType[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
      state.totalPages = Math.floor(action.payload.length / 8);
    });
    builder.addCase(fetchProducts.rejected, (state) => {
      state.status = Status.ERROR;
    });
    builder.addCase(fetchProductById.pending, (state) => {
      state.status = Status.LOADING;
      state.item = {} as CardPropsType;
    });
    builder.addCase(fetchProductById.fulfilled, (state, action) => {
      state.item = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchProductById.rejected, (state) => {
      state.status = Status.ERROR;
      state.item = {} as CardPropsType;
    });
  },
});

export const selectorProduct = (state: RootState) => state.product;

export const { setItems } = productSlice.actions;

export default productSlice.reducer;
