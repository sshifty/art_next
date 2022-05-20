import { NextPage } from "next";
import { useAppSelector } from "../app/hooks";
import { ArtCard } from "../features/artworks/components/ArtCard";

interface OwnProps {}

type Props = OwnProps;

const Favourites: NextPage = (props) => {
  const favourites = useAppSelector((state) => state.favourite);
  if (!favourites.list.length) {
    return <h1>{"You don't have any favourite artwork!"}</h1>;
  }
  return (
    <section>
      <div>
        {favourites.list.map((item) => {
          return <ArtCard key={item.id} artwork={item} />;
        })}
      </div>
    </section>
  );
};

export default Favourites;
