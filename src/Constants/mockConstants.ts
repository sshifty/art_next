import { ArtworkState } from "../features/artworks/types";

export const mockArtWork = {
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

export const mockFetchedSingleArtwork = {
  status: 200,
  statusText: "OK",
  headers: {},
  config: {},
  data: {
    data: {
      id: 50273,
      title: "Male Face Mask (Zauli)",
      thumbnail: [Object],
      image_id: "bf4ac6d1-fdd1-7937-fbac-079b3dde6f1d",
    },
    config: {
      iiif_url: "https://www.artic.edu/iiif/2",
      website_url: "http://www.artic.edu",
    },
  },
};

export const mockFetchedArtworks = {
  status: 200,
  statusText: "OK",
  headers: {},
  config: {},
  data: {
    pagination: {
      total: 116128,
      limit: 25,
      offset: 0,
      total_pages: 4646,
      current_page: 1,
      next_url:
        "https://api.artic.edu/api/v1/artworks?page=2&limit=25&fields=id%2Ctitle%2Cimage_id%2Cthumbnail",
    },
    data: [
      {
        id: 16571,
        title: "Arrival of the Normandy Train, Gare Saint-Lazare",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhBwAFAPUAADU8QkROS0ZPU0hSVk1YXVFWUlBXXlFaWVNcWFFkV1plVVtjWmBnWmFqXmRrX05ZYFFaYlljbF5qbGNsY2ZydmlzdWRxeGdze2l1fWx3fG16enJ4fH+KioWOkZeam5yjqZ2lqrG1ubS6vwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAHAAUAAAYhQIKmYslQDoONp8ORBECi0OfyKEAMmAhAgFhMHA2GIhEEADs=",
          width: 6786,
          height: 5092,
          alt_text:
            "Loosely painted image of an open-air train station. On the right, a parked train gives off an enormous plumb of white smoke, making the scene look as though it were full of clouds. A huddled mass of barely discernible people crowd around the train on both sides of the tracks. Blue, green, and gray tones dominate.",
        },
        image_id: "0f1cc0e0-e42e-be16-3f71-2022da38cb93",
      },
      {
        id: 8961,
        title: "Head of Arthur Jerome Eddy",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhBQAFAPQAAD8/O0REQUpKR1FRT35+fZmZl5uamZubmZ+fn6Kioqampaenp6ioqLW1tLW1tri4uLq6ur6+vr+/v9LS0tPT0wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAFAAUAAAUVIIMQyQIhgfJMjtBM0gAMEWUUxxQCADs=",
          width: 2304,
          height: 2250,
          alt_text: "A work made of bronze.",
        },
        image_id: "0377f007-2251-af1f-e997-ac44217b6651",
      },
      {
        id: 16776,
        title: "After the Hurricane, Bahamas",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhBwAFAPUAAFBOTGtsantqY2BrcWhyeGx1eXF6fHF6fYx/col/dZaKe5eNfmp8iHOAiHKEi3aKkIiFgJuRhZeRjIaNkIqRk4+Wl4WTmKyYiqylmp+tsKytrLi3qaCzuqS5vqm7v7y+vMO9qZa3xNvUwgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAHAAUAAAYhwMGEQigcDJDKw8FoWBAXiYYT6iQEgMAn4wGJNouIAhMEADs=",
          width: 11777,
          height: 8265,
          alt_text:
            "Watercolor, boat debris and dark skinned man lie on beach, dark sky in background.",
        },
        image_id: "b34de958-1cbe-065f-4941-c34f64d2b366",
      },
      {
        id: 16794,
        title: "The Gulf Stream",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhCQAFAPUAABMfLxAqPjZdazxbaE5LTlZLSXVdUnleV3xhWn5jXGZiY2RjZmxoaHdycX54dHd4e4J6doJ7eZWBfVZ2gXCAhYyKh4+Ni7GNgauQiLGSirCaj6qclLWdlJGhobinorKrprGspripo7KzrrSwrL22ssO8tsi8tsrAt9LEu9nMwtjRyd3TydzTywAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAJAAUAAAYqwAZDsXiQWKqVo2KJQDYeUwoUwiAMmsSnRJFkDpxLQTDpiE6oEQEQGAQBADs=",
          width: 3000,
          height: 1683,
          alt_text:
            "A work made of transparent watercolor, with touches of opaque watercolor and traces of blotting, over graphite, on moderately thick, moderately textured, ivory wove paper (lower edge trimmed).",
        },
        image_id: "4a076002-dffe-54e9-5256-0691c3a65c3b",
      },
      {
        id: 18751,
        title: "Bust of Said Abdullah of the Darfour People",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhBAAFAPQAACQpJiguLS4yMjM2NTQ5Ojg8OTxAQkdLSURJTGdnY2RnZHFzb3l7eoKDgYSEgomLjY2Oj5GRjsfGwsbFxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURoOQ0UwQI0KEMz1IQTGIgQQgAOw==",
          width: 1795,
          height: 2250,
          alt_text: "A work made of bronze.",
        },
        image_id: "6a0e3e40-1e36-2109-378f-3fc5d29176b3",
      },
      {
        id: 18747,
        title: "The Law is too Slow",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhBAAFAPQAAD8+NUdGPVFPRltZTnJwYn17bX99boF+cYaCc4WDdYyIeJKOf7OvnrOvoMK8qszGscjEtMnHuNjSvtfTwQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAUR4MM0jjIEB0IYxQIIiQRFUwgAOw==",
          width: 2245,
          height: 3000,
          alt_text:
            "A work made of lithograph in black on cream japanese tissue.",
        },
        image_id: "dded1149-36e9-4843-a9d8-cd54a4e641ce",
      },
      {
        id: 18759,
        title: "Helmet Mask (Kponyungo)",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhBgAFAPQAAAcICAYICQgICAkKCgsLCwwMDQwNDR8dHC8nITQqIjEtKzIwKz00Kjk1Mjw6OEM6M0k+M1dKQlBKRVdVVG5qZmxsbHd5eoJ/fJubnJ6enqampKipqa+urgAAAAAAAAAAACH5BAAAAAAALAAAAAAGAAUAAAUY4FAEAEEgyaMYgiNFUHNU1rQwVMZt2KWFADs=",
          width: 9376,
          height: 7379,
          alt_text: "A work made of wood and pigment.",
        },
        image_id: "a6b0bddb-5593-2970-baed-a677eaaa9a25",
      },
      {
        id: 18754,
        title: "Bust of a Woman",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhBAAFAPQAAElGS1FNTlJPUXZzdHt6eo2LiZGPj6ampbq6tr/Au8TFvMTGvsrKxc3Ox97g2uLj3eTl3uvs5u3u6e7v6gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURoJIUDXQMEQMQ0yIEzoMYUggAOw==",
          width: 5032,
          height: 6493,
          alt_text: "A work made of bronze.",
        },
        image_id: "725d19ab-4bd4-e640-86f2-a119e0a154e0",
      },
      {
        id: 21727,
        title: "Thanksgiving",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhBwAFAPUAAEM6NVA+NlFGPlxIPlNHQGRTR2lTRmxWTGtfTnVaSXdbSXJdTndcTXFiUX5mU39sW3NxZXxzYX51Y316aYBgTYtsWoh1XpFwXYJ9bZR2Ypd+bI2AZ5qJb5GJc5CMd5CPfpaRfZaSfbGKcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAHAAUAAAYhQNAn5MFAJh3JBjEIRASNRyFB4QAIGY3CYVkcKqKLgREEADs=",
          width: 8300,
          height: 5816,
          alt_text:
            "A chaotic but happy kitchen scene: A light-skinned woman in a pink dress at left bends to take a turkey out of the oven, while another at right forms a pie near a small girl playing with a kitten. Behind them, a woman selects dishware as yet another carries a basket of ingredients. A fifth woman in the back puts on a fancy hat and coat near a pair of babies reaching out from their twin high chair.",
        },
        image_id: "d388928f-3222-b48c-1cbb-7afa917de928",
      },
      {
        id: 29669,
        title: "Weary",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhAwAFAPMAAJGOeMG+qcXCrcbDscrHsNHOudLPudPQvtXSvdfUwNbUwdjVweDezeLfzuLg0AAAACH5BAAAAAAALAAAAAADAAUAAAQLUI0jQCgEJbNcYxEAOw==",
          width: 2336,
          height: 3504,
          alt_text:
            "A work made of drypoint in black ink on cream japanese paper.",
        },
        image_id: "4d010c1b-dc95-2787-e224-bdb9baac1cb0",
      },
      {
        id: 24306,
        title: "Blue and Green Music",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhBAAFAPQAADpDPD5IPD1UPjlBQUlWUExQV0lUXE5VXGh9ZWV3anSRcUVjgXWBgGiLkoKZk4udrJCnqYq2sqfCi6nDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURoBE1S/BMjlBAjAIkh4QMRAgAOw==",
          width: 4175,
          height: 5053,
          alt_text:
            "Abstract painting in predominant shades of blue, green, and black, featuring diagonal bands of color and undulating lines.",
        },
        image_id: "702580d8-451e-0b0c-bcc1-bac62e5f6631",
      },
      {
        id: 30731,
        title: "Figure (Mbulu Ngulu)",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhAwAFAPMAAHNjTHRuaoaAd5aOh6ainKOioqenpquopKurqq6trLGvrLKysbW0s7S0tLq6uQAAACH5BAAAAAAALAAAAAADAAUAAAQLkBF3gEpilWDQaBEAOw==",
          width: 5572,
          height: 9982,
          alt_text: "A work made of wood, brass, and ivory.",
        },
        image_id: "e0e310b6-17a3-60c0-f9b5-2631abe9689c",
      },
      {
        id: 30661,
        title: "Khamsa Standard",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhAwAFAPMAAGVXRHhnUoV+d4OAfYqFfouFfoeHhoqHhIiHiJeSjJuamKCfnqGhoKqpqKqqqAAAACH5BAAAAAAALAAAAAADAAUAAAQLEA1zAikgLcGachEAOw==",
          width: 4185,
          height: 5947,
          alt_text: "A work made of brass, with silver.",
        },
        image_id: "b81eb149-737c-0c3b-146e-3de2c3bef13a",
      },
      {
        id: 34181,
        title: "Time Transfixed",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhAwAFAPMAADEoHEA1J0hCO3JNMHdZP2ZaSnpcQWNfXGpgVH1nVZFyVoB3b5J4Y5Z+aYN5cAAAACH5BAAAAAAALAAAAAADAAUAAAQLMABWUHNHLWESGREAOw==",
          width: 4137,
          height: 6209,
          alt_text:
            "Surrealist painting of miniature train exiting fireplace mid-air, large mirror over mantle.",
        },
        image_id: "6a7160ea-df65-9083-c16c-33b30662208d",
      },
      {
        id: 44262,
        title: "Portrait of Jeanbon Saint-André",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhBQAFAPQAAFE8KVdCLVpCK1xELVtFMF9IMWJJMmJMNWZNNG1UOXFYOnRYPnheQ31vXoRnR4dmRpV8XY97YpeCZ6GGZKKMb6iKaKiLaMWlgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAFAAUAAAUVoIA8BpBMknU4VHMxChRVx1AsRBACADs=",
          width: 2252,
          height: 2250,
          alt_text:
            "A work made of pen and black ink and brush and black ink with yellow ocher watercolor over graphite, on cream laid paper.",
        },
        image_id: "5d7f22f6-e511-642f-ed96-5e4390c17031",
      },
      {
        id: 47141,
        title: "Nude Seated in a Bathtub",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhBAAFAPQAADs9O0xHNnVKNFBOR1FSR2daT3tdTGJbWWFgWW1mZXp2cIRXP5NkRYVkXZ19d4+JfqmMfZeOg6GMgLumngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURIGMsAiQ5TTQlxXAAAYEoTwgAOw==",
          width: 6415,
          height: 8253,
          alt_text: "A work made of oil on canvas.",
        },
        image_id: "e438d818-9c7b-824a-74f9-5b1e663ad7a4",
      },
      {
        id: 45259,
        title: "Nude with Cats",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhBAAFAPQAAFpcVVthVGBgSndvSW5hUWtlWHJvVWxpYHJ1bYd+an2Feo6Da4iGcZmTfqWdi6SgkK+rnLS7q7u4qb68rAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURoBIIQ8QQBlIsDXAkzjNJUAgAOw==",
          width: 4603,
          height: 5060,
          alt_text: "A work made of oil on cardboard.",
        },
        image_id: "96c25381-bdfb-81c4-de91-1186aa38ace4",
      },
      {
        id: 50397,
        title: "The Departure of Marcus Attilius Regulus for Carthage",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhBwAFAPUAAG9zX3B0YnF3Y3R6Z3p+a3x/anyBbYSGb4CFcYGGcYOGcIOHc4SGcoWJcYWKdIeMdoiJcoiLdIiJdouPeo2PeI2Qeo+Se42SfI+UfZCTe5KUe5GTfpCUfJGUfZGVfZOVfJaXfY6SgZWYgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAHAAUAAAYhQE2jg+FEPhnEQHBxWESGUOAx2XgSAAlhUQEdFBBGgRIEADs=",
          width: 8584,
          height: 6521,
          alt_text:
            "A work made of pen and black ink and brush and black ink wash and opaque white watercolor with black chalk and touches of brown watercolor on blue laid paper.",
        },
        image_id: "bfb1e6b9-00c5-e174-54cb-21b74a7b03ee",
      },
      {
        id: 50273,
        title: "Male Face Mask (Zauli)",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhAwAFAPMAAGNTRIFvYLKtqLSvqcXCv8rFwcrGxMjHxs3KyNDOzNnX1tna297b2eLh4ePj4wAAACH5BAAAAAAALAAAAAADAAUAAAQLMBlHRkOBHVCWUBEAOw==",
          width: 2136,
          height: 3660,
          alt_text: "A work made of wood, pigment, and metal tacks.",
        },
        image_id: "bf4ac6d1-fdd1-7937-fbac-079b3dde6f1d",
      },
      {
        id: 53563,
        title: "Akbar Offering Timur's Crown to Shah Jahan",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhBAAFAPQAAMGsisOxkMSzk8W0ksW0k8S0lce2lcS0l8e2l8m4mMi4mcu6msm6nsu8nc69nsu8odHAoNDAodXEowAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURIPMcgJM0yWIMAkIEBSRFSggAOw==",
          width: 2380,
          height: 3212,
          alt_text: "A work made of ink on paper.",
        },
        image_id: "87bcfb35-1265-99d2-bd3b-86439e034b58",
      },
      {
        id: 54347,
        title: "Snake",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhBAAFAPQAAD48OE1JRFZSTFlVT1lWUFtXUVtYUmFdWGNfWWRgWWtnYXNuZ3l1bnt3cIN9dIF9domDe46Kgp2Yj6GbkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURoIMQgqEAQ/EcSdBEC8RIUwgAOw==",
          width: 4724,
          height: 5585,
          alt_text: "A work made of gelatin silver print.",
        },
        image_id: "d8f12dad-b0a7-4e58-5e3d-ed4324c84e42",
      },
      {
        id: 54344,
        title: "Back",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhBwAFAPUAAHZtYHpyZX92Z4B3aY6DcY+FdI6EdZqOfZuPfaCUf6CVhKGWhqabiaibiKmdiaiciqyfjK2girKji7enj7Glk7WplrqpkLqqkriqlb6tlMS1n8u5n8O2pNC/p9HAp9DBqtjHr9jIsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAHAAUAAAYhQM6CYQg4FJTC4CAANEKbCUFCgGAylkTkgvh4Oo+KBhQEADs=",
          width: 6215,
          height: 4327,
          alt_text: "A work made of gelatin silver print.",
        },
        image_id: "2ad44032-8faa-dfaf-1da6-1cf9d8d9f783",
      },
      {
        id: 63783,
        title: "Melusine and the Great Transparents",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhBAAFAPQAAHt0Z4B+R3iHbH2Eb46SbJydcHaMjX2RjnaUpnuWooeWhICSiYyel4qen4yenJaih4GdrYifqJOpqYakuQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURIJIcBhA9SyBNkDAwTUEoTggAOw==",
          width: 6643,
          height: 8299,
          alt_text: "A work made of oil on canvas.",
        },
        image_id: "e529ea2c-e8c9-bd4f-fd8a-3116f7b93b22",
      },
      {
        id: 61612,
        title: "Nude with a Pitcher",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhBAAFAPQAAFRFOllJPWdPQWhVR2hXR29cTXFaTHdeTXpfTG9eUXZgT35hT3hlUIRpVoVrV45xW4x0XpJ3X5B3YZyAZQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURIFQMx6IkjmBIT0BEDcBMSAgAOw==",
          width: 3576,
          height: 4401,
          alt_text: "A work made of oil on canvas.",
        },
        image_id: "aa7ac006-5b63-12aa-3ab7-705cc612aa0a",
      },
      {
        id: 66949,
        title: "Lightly Draped Dancing Female Nude",
        thumbnail: {
          lqip: "data:image/gif;base64,R0lGODlhAwAFAPMAALeehb2hiL6ljL+mjcCjicCki8GljMGnj8SmjMCoj8Opj8eojsKpkcSqkcOskwAAACH5BAAAAAAALAAAAAADAAUAAAQL8DBXRCJgoKCWaREAOw==",
          width: 3367,
          height: 5171,
          alt_text:
            "A work made of graphite with stumping, on tan card laid down on tan wove paper.",
        },
        image_id: "36858956-05e0-ab95-003e-e3d8d767a905",
      },
    ],
    info: {
      license_text:
        "The data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu.",
      license_links: [
        "https://creativecommons.org/publicdomain/zero/1.0/",
        "https://www.artic.edu/terms",
      ],
      version: "1.4",
    },
    config: {},
  },
};
