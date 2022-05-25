import { ArtworkState } from "../features/artworks/types";
import axios from "axios";
import { base } from "next/dist/build/webpack/config/blocks/base";
const fields = "id,title,image_id,thumbnail";
const baseURL = "https://api.artic.edu/api/v1/artworks";

const api = axios.create({
  baseURL,
});

export const fetchArtworks = async (
  page: number = 1,
  pageLimit: number = 25
) => {
  const resp = await axios.get(
    `${baseURL}?page=${page}&limit=${pageLimit}&fields=${fields}`
  );
  console.log(resp);
  const { data } = resp;

  const infos = data.data.map((item) => {
    return {
      ...item,
      imageURL: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`,
    };
  });

  return {
    pagination: data.pagination,
    infos,
  };
};

export const fetchSingleArtwork = async (artID: number) => {
  const resp = await axios.get(`${baseURL}/${artID}?fields=${fields}`);

  const { data } = resp;

  data.data.imageURL = `https://www.artic.edu/iiif/2/${data.data.image_id}/full/843,/0/default.jpg`;

  return data.data;
};

export const fetchQuerySearch = async (
  param: string,
  page: number = 1,
  pageLimit: number = 25
) => {
  const resp = await api.get(
    `$/search?q=${param}&query[term][is_public_domain]=true&limit=${pageLimit}&page=${page}&fields=${fields}`
  );

  const { data } = await resp;

  const infos = data.data.map((item) => {
    return {
      ...item,
      imageURL: `https://www.artic.edu/iiif/2/${item.image_id}/full/843,/0/default.jpg`,
    };
  });

  return {
    pagination: data.pagination,
    infos,
  };
};
