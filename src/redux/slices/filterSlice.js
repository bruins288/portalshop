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
  },
});

export const { setTypeId, setSelectedSort, setCurrentPage } =
  filterSlice.actions;

export default filterSlice.reducer;
