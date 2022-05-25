import {
  getByLabelText,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import Nav from "./Nav";

import { Provider } from "react-redux";
import { makeStore } from "../app/store";
import { ArtCard } from "../features/artworks/components/ArtCard";
import SingleArtwork from "../pages/[id]";
import { mockArtWork } from "../Constants/mockConstants";
import { Artwork } from "../features/artworks/types";

describe("Test testing", () => {
  it("renders the component", () => {
    const store = makeStore();
    const { getByText, getByLabelText } = render(
      <Provider store={store}>
        <Nav />
      </Provider>
    );
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByLabelText("Search Artwork")).toBeInTheDocument();
    expect(getByText("Search")).toBeInTheDocument();
    screen.debug();
  });
  it("artcard", () => {
    const store = makeStore();

    const { getByText, getByLabelText, getByAltText } = render(
      <Provider store={store}>
        <ArtCard artwork={mockArtWork} />
      </Provider>
    );

    getByText(mockArtWork.title);
    getByAltText(mockArtWork.thumbnail.alt_text);
    getByText("ADD");
    getByText("SHOW");
  });
});

jest.mock("../app/api", () => ({
  fetchSingleArtwork: (id: number) =>
    new Promise((resolve) => {
      setTimeout(() => resolve(mockArtWork), 500);
    }),
}));

test("render single artwork", async () => {
  const store = makeStore();

  jest.mock("next/router", () => ({
    useRouter: () => ({
      isFallback: false,
    }),
  }));

  const { getByText, getByLabelText, rerender } = render(
    <Provider store={store}>
      <SingleArtwork artwork={mockArtWork} />
    </Provider>
  );
});

jest.mock("next/router", () => ({
  useRouter: () => ({
    isFallback: true,
  }),
}));
test("render single artwork error", async () => {
  const store = makeStore();

  const { getByText, getByLabelText, rerender } = render(
    <Provider store={store}>
      <SingleArtwork artwork={mockArtWork} />
    </Provider>
  );
  expect(getByText("loading")).toBeInTheDocument();
});
