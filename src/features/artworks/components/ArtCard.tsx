import Image from "next/image";

import { FC } from "react";
import { Artwork } from "../types";
import FavouriteButton from "../../../../Components/FavouriteButton";
import Link from "next/link";
interface CardProps {
  artwork: Artwork;
}

export const ArtCard: FC<CardProps> = ({ artwork }) => {
  return (
    <div>
      <Image
        src={artwork.imageURL}
        width={200}
        height={200}
        placeholder={artwork.thumbnail?.lqip ? "blur" : "empty"}
        blurDataURL={artwork.thumbnail?.lqip}
        alt={artwork.thumbnail?.alt_text ?? artwork.title}
      />
      <h3>{artwork.title}</h3>
      <FavouriteButton artwork={artwork} />
      <Link href={`/${artwork.id}`}>
        <button>SHOW</button>
      </Link>
    </div>
  );
};
