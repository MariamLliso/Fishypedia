import Fish from "./Fish";
import { render, screen } from "@testing-library/react";
import FishesDataProvider from "../../store/context/FishesDataProvider";

describe("Given a Fish component.", () => {
  const fish = {
    id: 16,
    "file-name": "freshwater_goby",
    name: {
      "name-EUen": "freshwater goby",
    },
    availability: {
      "month-northern": "",
      "month-southern": "",
      time: "4pm - 9am",
      isAllDay: false,
      isAllYear: true,
      location: "River",
      rarity: "Common",
      "month-array-northern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    shadow: "Small (2)",
    icon_uri: "https://acnhapi.com/v1/icons/fish/16",
  };
  describe("When invoked with a fish whose name is 'freshwater goby'", () => {
    test("Then it should render a heading with 'Freshwater goby on it'", () => {
      const expectedName = "Freshwater goby";

      render(
        <FishesDataProvider>
          <Fish fish={fish} />
        </FishesDataProvider>
      );
      const expectedHeading = screen.getByRole("heading").textContent;

      expect(expectedHeading).toEqual(expectedName);
    });
  });
});
