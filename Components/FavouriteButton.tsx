import React, { FunctionComponent } from "react";
import { useAppDispatch } from "../src/app/hooks";
import { useSelector } from "react-redux";
import {
  addFavourite,
  removeFavourite,
} from "../src/features/artworks/favouriteArtworkSlice";
import { Artwork } from "../src/features/artworks/types";

interface OwnProps {
  artwork: Artwork;
}

type Props = OwnProps;

const FavouriteButton: FunctionComponent<Props> = ({ artwork }) => {
  const dispatch = useAppDispatch();
  const favouriteIDs = useSelector((state) =>
    state.favourite.list.map((item) => item.id)
  );
  const isFav = favouriteIDs.indexOf(artwork.id) !== -1;
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
