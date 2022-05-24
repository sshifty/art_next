import { Pagination } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialState: Pagination = {
  current_page: 1,
  limit: 25,
  total_pages: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.current_page = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.total_pages = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
  },
});

export const { setCurrentPage, setTotalPages, setLimit } =
  paginationSlice.actions;

export default paginationSlice.reducer;
