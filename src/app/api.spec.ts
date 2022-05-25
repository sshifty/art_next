import axios, { AxiosResponse } from "axios";

import {
  mockFetchedArtworks,
  mockFetchedSingleArtwork,
} from "../Constants/mockConstants";
import { fetchArtworks, fetchSingleArtwork } from "./api";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("API", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("Returns a single artwork object with imageURL", async () => {
    mockedAxios.get.mockResolvedValue(mockFetchedSingleArtwork);

    const data = await fetchSingleArtwork(50237);

    expect(data.title).toBe("Male Face Mask (Zauli)");
    expect(data.imageURL).toBeTruthy();
  });

  it("Fetched artworks length equals with pagination current items", async () => {
    mockedAxios.get.mockResolvedValue(mockFetchedArtworks);

    const data = await fetchArtworks();

    expect(data.infos.length).toBe(data.pagination.limit);

    expect(data.infos[1].imageURL).toBeTruthy();
  });
});
