import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { makeStore } from "../app/store";
import SingleArtwork, { getStaticProps } from "../pages/[id]";

import * as api from "../app/api";
import { Artwork } from "../features/artworks/types";
import { useRouter } from "next/router";

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
describe("Single Artwork page", () => {
  it("getStaticProps returns the correct data", async () => {
    jest
      .spyOn(api, "fetchSingleArtwork")
      .mockImplementation(async () => artwork);

    const response = await getStaticProps({ params: { id: "50273" } });
    expect(api.fetchSingleArtwork).toHaveBeenCalled();
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
});
