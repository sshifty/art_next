import { ArtworkState } from "../features/artworks/types";
import axios from "axios";
const fields = "id,title,image_id,thumbnail";
const baseURL = "https://api.artic.edu/api/v1/artworks";

export const fetchArtworks = async (page: number, pageLimit: number) => {
  const resp = await fetch(
    `${baseURL}?page=${page}&limit=${pageLimit}&fields=${fields}`
  );

  const data = await resp.json();

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

const api = axios.create({
  baseURL,
});

export const fetchSingleArtwork = async (artID: number) => {
  // const resp = await fetch(`${baseURL}/${artID}?fields=${fields}`);
  // const data = await resp.json();

  const resp = await api.get(`/${artID}?fields=${fields}`);
  const { data } = resp;
  data.data.imageURL = `https://www.artic.edu/iiif/2/${data.data.image_id}/full/843,/0/default.jpg`;

  return data.data;
};

export const fetchQuerySearch = async (
  param: string,
  page: number = 1,
  pageLimit: number = 25
) => {
  const resp = await fetch(
    `${baseURL}/search?q=${param}&query[term][is_public_domain]=true&limit=${pageLimit}&page=${page}&fields=${fields}`
  );
  const data = await resp.json();
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
