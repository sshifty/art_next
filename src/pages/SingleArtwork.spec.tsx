import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";

import { makeStore } from "../app/store";
import SingleArtwork, { getStaticProps } from "../pages/[id]";
import * as api from "../app/api";
import { Artwork } from "../features/artworks/types";
import { createMockStore, mockStore } from "../app/mockStore";

const artwork: Artwork = {
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

interface payloadFavRemoveType {
  type: string;
  payload: number;
}

describe("Single Artwork page", () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });
  it("getStaticProps returns the correct data", async () => {
    const store = makeStore();
    jest
      .spyOn(api, "fetchSingleArtwork")
      .mockImplementation(async () => artwork);

    const response = await getStaticProps({ params: { id: "50273" } });

    expect(api.fetchSingleArtwork).toBeCalledTimes(1);

    expect(response).toEqual({
      props: {
        artwork,
        errorMessage: "",
      },
    });
  });

  it("Artwork page renders with props data", () => {
    const store = makeStore();

    jest.spyOn(require("next/router"), "useRouter").mockImplementation(() => ({
      isFallback: false,
    }));

    render(
      <Provider store={store}>
        <SingleArtwork artwork={artwork} />
      </Provider>
    );

    const titleHeader = screen.getByRole("heading", { name: artwork.title });
    expect(titleHeader).toBeVisible();
  });

  it("Artwork page renders loading while waiting", () => {
    const store = makeStore();

    jest.spyOn(require("next/router"), "useRouter").mockImplementation(() => ({
      isFallback: true,
    }));

    render(
      <Provider store={store}>
        <SingleArtwork artwork={artwork} />
      </Provider>
    );

    const titleHeader = screen.getByRole("heading", { name: "loading" });
    expect(titleHeader).toBeVisible();
  });

  it("Favourite button renders correct data", async () => {
    const store = createMockStore({
      favourite: {
        list: [artwork],
      },
    });

    //TODO!!!!
    // jest.spyOn(window.localStorage, "getItem").mockImplementation(() => {
    //   return JSON.stringify([artwork]);
    // });

    jest.spyOn(require("next/router"), "useRouter").mockImplementation(() => ({
      isFallback: false,
    }));

    render(
      <Provider store={store}>
        <SingleArtwork artwork={artwork} />
      </Provider>
    );

    const favButton = screen.getByRole("button", { name: "REMOVE" });
    expect(favButton).toBeVisible();

    await userEvent.click(favButton);

    const actions = store.getActions();
    const expectedPayload: payloadFavRemoveType = {
      type: "favourite/removeFavourite",
      payload: artwork.id,
    };

    expect(actions).toEqual([expectedPayload]);

    screen.debug();
    // const addButton = await screen.findByRole("button", { name: "ADD" });
    // expect(addButton).toBeVisible();
  });
});
