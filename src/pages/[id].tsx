import { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect } from "react";
import { getSingleArtworkAsync } from "../features/artworks/singleArtworkSlice";
import { useRouter } from "next/router";
import Image from "next/image";
import FavouriteButton from "../Components/FavouriteButton";
const SingleArtwork: NextPage = (props) => {
  const dispatch = useAppDispatch();
  const artwork = useAppSelector((state) => state.singleArtwork);
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (router.isReady) {
      dispatch(getSingleArtworkAsync(Number(id)));
    }
  }, []);
  if (artwork.status === "pending") {
    return <h1>Loading...</h1>;
  } else if (artwork.status === "rejected") {
    return <h1>No artwork found</h1>;
  }
  return (
    <div>
      <h1>{artwork.data.title}</h1>
      <Image
        src={artwork.data.imageURL}
        width={500}
        height={500}
        placeholder={artwork.data.thumbnail?.lqip ? "blur" : "empty"}
        blurDataURL={artwork.data.thumbnail?.lqip}
        alt={artwork.data.thumbnail?.alt_text ?? artwork.data.title}
      />
      <FavouriteButton artwork={artwork.data} />
    </div>
  );
};

export default SingleArtwork;
