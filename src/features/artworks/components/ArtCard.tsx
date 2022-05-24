import Image from "next/image";

import { FC } from "react";
import { Artwork } from "../types";
import FavouriteButton from "../../../Components/FavouriteButton";
import Link from "next/link";
import styles from "../../../styles/ArtCard.module.css";
interface CardProps {
  artwork: Artwork;
}

export const ArtCard: FC<CardProps> = ({ artwork }) => {
  console.log(artwork);
  return (
    <div className={styles.card}>
      <Image
        src={artwork.imageURL}
        width={200}
        height={200}
        placeholder={artwork.thumbnail?.lqip ? "blur" : "empty"}
        blurDataURL={artwork.thumbnail?.lqip}
        alt={artwork.thumbnail?.alt_text ?? artwork.title}
      />
      <h3>{artwork.title}</h3>
      <div className={styles.buttonContainer}>
        <FavouriteButton artwork={artwork} />
        <Link href={`/${artwork.id}`}>
          <button className={styles.btnShow}> SHOW</button>
        </Link>
      </div>
    </div>
  );
};
