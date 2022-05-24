import { Artwork, FavouriteState } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const getLocal = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("favourite")) || [];
  }
};

export const initialState: FavouriteState = {
  list: getLocal(),
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavourite: (state, action: PayloadAction<Artwork>) => {
      state.list.push(action.payload);

      updateFavourite(state);
    },
    removeFavourite: (state, action: PayloadAction<number>) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
      updateFavourite(state);
    },
  },
});
export const { addFavourite, removeFavourite } = favouriteSlice.actions;
const updateFavourite = (state: FavouriteState) => {
  localStorage.setItem("favourite", JSON.stringify(state.list));
};
export default favouriteSlice.reducer;
