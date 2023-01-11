import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  typeId: 0,
  selectedSort: "rating",
  currentPage: 1,
};

export const filterSlice = createSlice({
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
  },
});

export const { setTypeId, setSelectedSort, setCurrentPage, setFilters } =
  filterSlice.actions;

export default filterSlice.reducer;
