import React, { FunctionComponent } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addFavourite,
  removeFavourite,
} from "../features/artworks/favouriteSlice";
import { Artwork } from "../features/artworks/types";

interface OwnProps {
  artwork: Artwork;
}

type Props = OwnProps;

const FavouriteButton: FunctionComponent<Props> = ({ artwork }) => {
  const dispatch = useAppDispatch();
  const favouriteIDs = useAppSelector(
    (state) => state.favourite.list?.map((item) => item.id) || null
  );

  if (!favouriteIDs) {
    return null;
  }
  // Example
  //const isLoading = ["success", "pending"].includes(status);

  const isFav = favouriteIDs.includes(artwork.id);
  const buttonContext = isFav ? "REMOVE" : "ADD";
  const chooseAction = (): void => {
    isFav
      ? dispatch(removeFavourite(artwork.id))
      : dispatch(addFavourite(artwork));
  };
  return (
    <div>
      <button onClick={() => chooseAction()}>{buttonContext}</button>
    </div>
  );
};

export default FavouriteButton;
