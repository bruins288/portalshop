import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  typeId: 0,
  selectedSort: "rating",
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
  },
});

export const { setTypeId, setSelectedSort } = filterSlice.actions;

export default filterSlice.reducer;
