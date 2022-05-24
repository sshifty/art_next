import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SingleArtworkState, Artwork } from "./types";
import { fetchSingleArtwork } from "../../app/api";
import { getArtworksAsync } from "./artworksSlice";

export const initialState: SingleArtworkState = {
  data: {},
  status: "pending",
};

export const singleArtworkSlice = createSlice({
  name: "singleArtwork",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSingleArtworkAsync.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "success";
      })
      .addCase(getSingleArtworkAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getSingleArtworkAsync.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});

export const getSingleArtworkAsync = createAsyncThunk(
  "singleArtwork/getSingleArtwork",
  async (id: number) => {
    return await fetchSingleArtwork(id);
  }
);

export default singleArtworkSlice.reducer;
