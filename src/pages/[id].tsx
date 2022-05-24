import { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import FavouriteButton from "../Components/FavouriteButton";
import { fetchSingleArtwork } from "../app/api";
import { Artwork } from "../features/artworks/types";
import axios from "axios";

interface SingleProps {
  artwork: Artwork | null;
  errorMessage?: string;
  errorCode?: number;
}

const SingleArtwork: NextPage<SingleProps> = ({ artwork, errorMessage }) => {
  const [mount, setMount] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMount(true);
  }, []);

  if (errorMessage) {
    return <h1>Error</h1>;
  }
  if (router.isFallback) {
    return <h1>loading</h1>;
  }
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

      {mount && <FavouriteButton artwork={artwork} />}
    </div>
  );
};

export default SingleArtwork;
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
    /*true:serve static HTML fallback that then loads the data client-side
    -in this case use if(router.isFallback) to let the user know we are waiting for data to be served

   false:dont fetch other products than we specified and get 404 error
   blocking: first build the page with the data, but we cannot use router.isFallback and let the user know we are waiting
   for data to be fetched
  */
  };
}
export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;

  try {
    const data = await fetchSingleArtwork(Number(id));
    console.log(data);
    return {
      props: {
        artwork: data,
        errorMessage: "",
      },
    };
  } catch (e) {
    return {
      props: {
        artwork: null,
        errorMessage: "error",
      },
    };
  }
  //   return {
  //     props: {
  //       artwork: "error",
  //     },
  //   };
  // }
};
