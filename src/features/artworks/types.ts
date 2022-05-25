export interface Artwork {
  id?: number;
  title?: string;
  image_id?: string;
  thumbnail?: {
    alt_text: string;
    height: number;
    lqip?: string;
    width: number;
  };
  dimensions?: string;
  imageURL?: string;
}
export interface ArtworkState {
  list: Artwork[];
  total?: number;
  pagination: Pagination;
  status?: string;
  search: string;
}

export interface SingleArtworkState {
  data: Artwork;
  status: string;
}
export interface Pagination {
  total?: number;
  current_page: number;
  total_pages: number;
  limit: number;
}

export interface FavouriteState {
  list: Artwork[];
}

export interface GetArtworkProps {
  page: number;
  pageLimit: number;
}

export interface SearchArtworkProps {
  param: string;
  page: number;
  pageLimit: number;
}
