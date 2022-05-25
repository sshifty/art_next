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
import { Artwork } from "../features/artworks/types";

const mockArtWork = {
  id: 50273,
  title: "Male Face Mask (Zauli)",
  thumbnail: {
    lqip: "data:image/gif;base64,R0lGODlhAwAFAPMAAGNTRIFvYLKtqLSvqcXCv8rFwcrGxMjHxs3KyNDOzNnX1tna297b2eLh4ePj4wAAACH5BAAAAAAALAAAAAADAAUAAAQLMBlHRkOBHVCWUBEAOw==",
    width: 2136,
    height: 3660,
    alt_text: "A work made of wood, pigment, and metal tacks.",
  },
  image_id: "bf4ac6d1-fdd1-7937-fbac-079b3dde6f1d",
  imageURL:
    "https://www.artic.edu/iiif/2/bf4ac6d1-fdd1-7937-fbac-079b3dde6f1d/full/843,/0/default.jpg",
};

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
