import React, { ChangeEvent, FunctionComponent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  getArtworksAsync,
  getSearchArtworks,
  setSearch,
} from "../features/artworks/artworksSlice";
import Router, { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Search: FunctionComponent = (props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pagination = useAppSelector((state) => state.pagination);
  const [localSearch, setLocalSearch] = useState("");
  const artworkSearch = useAppSelector((state) => state.artworks.search);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value);
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    dispatch(setSearch(localSearch));
    e.preventDefault();
    if (!localSearch) {
      dispatch(
        getArtworksAsync({
          page: 1,
          pageLimit: 25,
        })
      );
    } else {
      dispatch(
        getSearchArtworks({
          param: artworkSearch,
          page: 1,
          pageLimit: pagination.limit,
        })
      );
    }
    if (router.pathname !== "/") {
      router.push("/");
    }
  };
  return (
    <div data-testid="search-form">
      <form onSubmit={onSubmit}>
        <label htmlFor="search-input">Search Artwork</label>
        <input
          id="search-input"
          data-testid="search-input"
          onChange={(e) => handleChange(e)}
          value={localSearch}
          type="text"
          placeholder={"Type here"}
        />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
