import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
    setTypeId: (state, action) => {
      state.typeId = action.payload;
    },
    setSelectedSort: (state, action) => {
      state.selectedSort = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action) => {
      state.currentPage = Number(action.payload.currentPage);
      state.selectedSort = action.payload.selectedSort;
      state.typeId = Number(action.payload.typeId);
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const selectorFiltersSort = (state) => state.filters.selectedSort;

export const {
  setTypeId,
  setSelectedSort,
  setCurrentPage,
  setFilters,
  setSearchValue,
} = filtersSlice.actions;

export default filtersSlice.reducer;
