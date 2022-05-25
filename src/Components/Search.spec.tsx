import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";

import Search from "./Search";
import { makeStore } from "../app/store";
import { createMockStore } from "../app/mockStore";

describe("Search Component", () => {
  it("Check if elements are rendered", () => {
    const store = createMockStore();

    render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const searchLabel = screen.getByLabelText("Search Artwork");
    const searchInput = screen.getByTestId("search-input");
    const searchButton = screen.getByRole("button", { name: "Search" });

    expect(searchLabel).toBeVisible();
    expect(searchInput).toBeVisible();
    expect(searchButton).toBeVisible();
  });

  it("Should be able to type in input", async () => {
    const store = createMockStore();

    const { getByText } = render(
      <Provider store={store}>
        <Search />
      </Provider>
    );

    const searchInput = screen.getByTestId("search-input") as HTMLInputElement;

    await userEvent.type(searchInput, "Testing input");

    expect(searchInput.value).toBe("Testing input");
  });
});
