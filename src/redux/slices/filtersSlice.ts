import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: IFiltersSlice = {
  typeId: 0,
  selectedSort: {
    name: "популярности",
    sortedType: "rating",
  },
  searchValue: "",
  currentPage: 1,
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setTypeId: (state, action: PayloadAction<number>) => {
      state.typeId = action.payload;
    },
    setSelectedSort: (state, action: PayloadAction<SortType>) => {
      state.selectedSort = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action: PayloadAction<IFiltersSlice>) => {
      state.currentPage = Number(action.payload.currentPage);
      state.selectedSort = action.payload.selectedSort;
      state.typeId = Number(action.payload.typeId);
    },
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const selectorFiltersSort = (state: RootState) =>
  state.filters.selectedSort;

export const {
  setTypeId,
  setSelectedSort,
  setCurrentPage,
  setFilters,
  setSearchValue,
} = filtersSlice.actions;

export default filtersSlice.reducer;
