import fishesReducer from "./fishesReducer";

describe("Given the fishesReducer", () => {
  describe("When it receive a group of two fishes and action loadFishes", () => {
    test("Then it should return a new group equals to the given one", () => {
      const fishes = [
        {
          id: 16,
          "file-name": "freshwater_goby",
        },
        {
          id: 17,
          "file-name": "loach",
        },
      ];

      const action = {
        type: "load-fishes",
        fishes,
      };

      const expectedResult = [
        {
          id: 16,
          "file-name": "freshwater_goby",
        },
        {
          id: 17,
          "file-name": "loach",
        },
      ];

      const fishesLoaded = fishesReducer(fishes, action);

      expect(fishesLoaded).toEqual(expectedResult);
    });
  });

  describe("When it receive a group of two fishes and no action", () => {
    test("Then it should return a new group equals to the given one", () => {
      const actualFishes = [
        {
          id: 16,
          "file-name": "freshwater_goby",
        },
        {
          id: 17,
          "file-name": "loach",
        },
      ];

      const action = {
        type: "",
        actualFishes,
      };

      const expectedResult = [
        {
          id: 16,
          "file-name": "freshwater_goby",
        },
        {
          id: 17,
          "file-name": "loach",
        },
      ];

      const fishesLoaded = fishesReducer(actualFishes, action);

      expect(fishesLoaded).toEqual(expectedResult);
    });
  });
});
