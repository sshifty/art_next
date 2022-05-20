import { GetStaticProps, NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect, useState } from "react";
import { getSingleArtworkAsync } from "../features/artworks/singleArtworkSlice";
import { useRouter } from "next/router";
import Image from "next/image";
import FavouriteButton from "../../Components/FavouriteButton";
import { fetchSingleArtwork } from "../app/api";
import { Artwork } from "../features/artworks/types";
import { useStore } from "react-redux";

interface SingleProps {
  artwork: Artwork;
}
const SingleArtwork: NextPage<SingleProps> = ({ artwork }) => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);

  console.log(artwork);
  return (
    <div>
      <h1>{artwork.title}</h1>
      <Image
        src={artwork.imageURL}
        width={500}
        height={500}
        placeholder={artwork.thumbnail?.lqip ? "blur" : "empty"}
        blurDataURL={artwork.thumbnail?.lqip}
        alt={artwork.thumbnail?.alt_text ?? artwork.title}
      />
      {mount ? <FavouriteButton artwork={artwork} /> : null}
    </div>
  );
};

export default SingleArtwork;
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;
  const data = await fetchSingleArtwork(Number(id));

  return {
    props: {
      artwork: data,
    },
  };
};
