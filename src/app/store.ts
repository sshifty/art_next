import merge from "lodash/merge";

import {
  Action,
  configureStore,
  DeepPartial,
  ThunkAction,
} from "@reduxjs/toolkit";
import artworkSlice, {
  initialState as artworkInit,
} from "../features/artworks/artworksSlice";

import singleArtworkSlice, {
  initialState as initSingle,
} from "../features/artworks/singleArtworkSlice";
import favouriteSlice, {
  initialState as initFav,
} from "../features/artworks/favouriteSlice";
import paginationSlice, {
  initialState as initPagi,
} from "../features/artworks/paginationSlice";
import {
  Artwork,
  ArtworkState,
  FavouriteState,
  Pagination,
} from "../features/artworks/types";

export function makeStore(preloadedPartialState: DeepPartial<RootState> = {}) {
  return configureStore({
    reducer: {
      artworks: artworkSlice,
      singleArtwork: singleArtworkSlice,
      favourite: favouriteSlice,
      pagination: paginationSlice,
    },
  });
}
export const store = makeStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = {
  artworks: ArtworkState;
  singleArtwork: Artwork;
  favourite: FavouriteState;
  pagination: Pagination;
};
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
