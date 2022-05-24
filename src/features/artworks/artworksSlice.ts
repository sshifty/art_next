import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchArtworks, fetchQuerySearch } from "../../app/api";
import { ArtworkState, GetArtworkProps, SearchArtworkProps } from "./types";

export const initialState: ArtworkState = {
  list: [],
  pagination: {
    current_page: 1,
    total_pages: 1,
    limit: 25,
  },
  status: "pending",
  search: "",
};

export const artworkSlice = createSlice({
  name: "artworks",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArtworksAsync.fulfilled, (state, action) => {
        state.list = action.payload.infos;
        state.pagination = action.payload.pagination;
        state.status = "success";
      })
      .addCase(getArtworksAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getArtworksAsync.rejected, (state, action) => {
        state.status = "rejected";
      });
    builder
      .addCase(getSearchArtworks.fulfilled, (state, action) => {
        state.list = action.payload.infos;
        state.pagination = action.payload.pagination;
        state.status = "success";
      })
      .addCase(getSearchArtworks.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(getSearchArtworks.rejected, (state, action) => {
        state.status = "rejected";
      });
  },
});
export const { setSearch } = artworkSlice.actions;
export const getArtworksAsync = createAsyncThunk(
  "artworks/getArtworks",
  async (props: GetArtworkProps) => {
    return await fetchArtworks(props.page, props.pageLimit);
  }
);
export const getSearchArtworks = createAsyncThunk(
  "artworks/searchArtworks",
  async (props: SearchArtworkProps) => {
    return await fetchQuerySearch(props.param, props.page, props.pageLimit);
  }
);

export default artworkSlice.reducer;
