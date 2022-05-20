import React, { FC } from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { getArtworksAsync } from "../features/artworks/artworksSlice";
import { Pagination } from "../features/artworks/types";
import { getSearchArtworks } from "../features/artworks/artworksSlice";
import { setLimit } from "../features/artworks/paginationSlice";

interface ControllerProps {
  pagination: Pagination;
}
export const Controller: FC<ControllerProps> = ({ pagination }) => {
  const pagi = useAppSelector((state) => state.pagination);
  const dispatch = useAppDispatch();
  const onSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    dispatch(
      getArtworksAsync({
        page: pagination.current_page,
        pageLimit: pagi.limit,
      })
    );
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
