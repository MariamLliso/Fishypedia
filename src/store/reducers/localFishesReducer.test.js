import localFishesReducer from "./localFishesReducer";

describe("Given a localFishesReducer", () => {
  const localFishes = [
    {
      id: 1,
      "file-name": "boris_fish",
    },
    {
      id: 7,
      "file-name": "nacho_lil_fish",
    },
  ];
  describe("When invoked receiving two fishes an action with the type property 'load-local-fishes", () => {
    test("Then it should return a copy of the given fishes", () => {
      const givenAction = {
        type: "load-local-fishes",
        localFishes,
      };

      const expectedLocalAction = localFishesReducer(localFishes, givenAction);

      expect(localFishes).toEqual(expectedLocalAction);
    });
  });

  describe("When invoked receiving two fishes and no action", () => {
    test("Then it should return a copy of the given fishes", () => {
      const givenAction = {
        type: "",
        localFishes,
      };
      const expectedFishes = [
        {
          id: 1,
          "file-name": "boris_fish",
        },
        {
          id: 7,
          "file-name": "nacho_lil_fish",
        },
      ];
      const expectedLocalAction = localFishesReducer(localFishes, givenAction);

      expect(expectedFishes).toEqual(expectedLocalAction);
    });
  });
});

describe("Given the localFishesReducer", () => {
  describe("When invoked receiving three fishes with the type property 'add-local-fishes'", () => {
    test("Then it should return an array of the three fishes plus one", () => {
      const expectedFishArrayLength = 4;

      const localFishes = [
        {
          id: 3,
          "file-name": "boris_fish",
        },
        {
          id: 1,
          "file-name": "nacho_lil_fish",
        },
        {
          id: 2,
          "fie-name": "mariam-lil-fish",
        },
      ];

      const givenAction = {
        type: "add-local-fishes",
        localFishes,
      };

      const expectedLocalAction = localFishesReducer(localFishes, givenAction);

      expect(expectedLocalAction).toHaveLength(expectedFishArrayLength);
    });
  });
  describe("When invoked reciving three fishes with the property delete-local-fishes", () => {
    test("Then it should return an arrray of three fishes", () => {
      const expectedFishArrayLength = 3;

      const localFishes = [
        {
          id: 3,
          "file-name": "boris_fish",
        },
        {
          id: 1,
          "file-name": "nacho_lil_fish",
        },
        {
          id: 2,
          "fie-name": "mariam-lil-fish",
        },
      ];

      const givenAction = {
        type: "delete-local-fishes",
        localFishes,
      };

      const expectedLocalAction = localFishesReducer(localFishes, givenAction);

      expect(expectedLocalAction).toHaveLength(expectedFishArrayLength);
    });
  });
});
