import { fireEvent, render, screen } from "@testing-library/react";

import { mockArtWork } from "../../Constants/mockConstants";
import { ArtCard } from "./components/ArtCard";
import { Provider } from "react-redux";
import { createMockStore } from "../../app/mockStore";
import Image from "next/image";
import userEvent from "@testing-library/user-event";

describe("Artwork Card", () => {
  it("renders card with correct properties", () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <ArtCard artwork={mockArtWork} />
      </Provider>
    );

    const image: HTMLImageElement = screen.getByTestId("artcard-image");
    expect(image.alt).toEqual(mockArtWork.thumbnail.alt_text);
    fireEvent.load(image);
    expect(image.src).toEqual(mockArtWork.imageURL);
  });
});
