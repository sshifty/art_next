import React, { ChangeEvent, FunctionComponent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  getArtworksAsync,
  getSearchArtworks,
} from "../features/artworks/artworksSlice";
import Router, { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Search: FunctionComponent = (props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pagination = useAppSelector((state) => state.pagination);
  const [search, setSearch] = useState("");
  const artworkSearch = useAppSelector((state) => state.artworks.search);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onSubmit = (e: React.SyntheticEvent) => {
    setSearch(search);
    e.preventDefault();
    if (!search) {
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
    console.log(router.pathname);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={(e) => handleChange(e)} value={search} type="text" />
        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
