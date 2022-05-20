import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import artworkSlice from "../features/artworks/artworksSlice";
import singleArtworkSlice from "../features/artworks/singleArtworkSlice";
import favouriteSlice from "../features/artworks/favouriteArtworkSlice";
import paginationSlice from "../features/artworks/paginationSlice";
export const store = configureStore({
  reducer: {
    artworks: artworkSlice,
    singleArtwork: singleArtworkSlice,
    favourite: favouriteSlice,
    pagination: paginationSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
