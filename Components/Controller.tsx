import React, { FC } from "react";
import { useAppSelector, useAppDispatch } from "../src/app/hooks";
import { getArtworksAsync } from "../src/features/artworks/artworksSlice";
import { Pagination } from "../src/features/artworks/types";
import { getSearchArtworks } from "../src/features/artworks/artworksSlice";
import { setLimit } from "../src/features/artworks/paginationSlice";

interface ControllerProps {
  pagination: Pagination;
}
export const Controller: FC<ControllerProps> = ({ pagination }) => {
  //refactor pagi/pagination
  const pagi = useAppSelector((state) => state.pagination);
  const dispatch = useAppDispatch();
  const search = useAppSelector((state) => state.artworks.search);
  const onSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    console.log(search);
    if (!search) {
      console.log("empty search", search);
      dispatch(
        getArtworksAsync({
          page: pagination.current_page,
          pageLimit: pagi.limit,
        })
      );
    } else {
      console.log("search", search);
      dispatch(
        getSearchArtworks({
          param: search,
          page: pagination.current_page,
          pageLimit: pagi.limit,
        })
      );
    }
  };

  const limitValues: number[] = [15, 25, 30, 50, 100];
  return (
    <div>
      <form onSubmit={onSubmit}>
        <select
          onChange={(e) => dispatch(setLimit(Number(e.target.value)))}
          name="limit"
          id="limit"
        >
          {limitValues.map((val: number) => {
            return (
              <option key={val} selected={pagi.limit === val} value={val}>
                {val}
              </option>
            );
          })}
        </select>
        <button>submit</button>
      </form>
      <button
        onClick={() =>
          dispatch(
            getArtworksAsync({
              page: pagination.current_page - 1,
              pageLimit: pagi.limit,
            })
          )
        }
        disabled={pagination.current_page === 1}
      >
        prev
      </button>
      <div>
        <h3>
          page{" "}
          <span>
            {pagination.current_page} of {pagination.total_pages}
          </span>
        </h3>
      </div>
      <button
        onClick={() =>
          dispatch(
            getArtworksAsync({
              page: pagination.current_page + 1,
              pageLimit: pagi.limit,
            })
          )
        }
      >
        next
      </button>
    </div>
  );
};