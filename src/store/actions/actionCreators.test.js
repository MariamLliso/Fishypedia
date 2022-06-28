import {
  addLocalFishesActionCreator,
  loadFishesActionCreator,
  loadLocalFishesActionCreator,
  deleteLocalFishesActionCreator,
  modifyLocalFishesActionCreator,
} from "./actionCreators";

describe("Given the ActionCreators loadFishes", () => {
  describe("When it receive a group of two fishes", () => {
    test("Then it should return an object with two properties: type and payload", () => {
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

      const expectedAction = {
        type: "load-fishes",
        fishes,
      };

      const action = loadFishesActionCreator(fishes);

      expect(action).toEqual(expectedAction);
    });
  });
});

describe("Given the loadLocalFishesActionCreator function", () => {
  describe("When invoked with a group of two fishes", () => {
    test("Then it should return an object with the type property 'load-local-fishes'", () => {
      const localFishes = [
        {
          id: 16,
          "file-name": "freshwater_goby",
        },
        {
          id: 17,
          "file-name": "loach",
        },
      ];

      const expectedAction = {
        type: "load-local-fishes",
        localFishes,
      };
      const localActionResult = loadLocalFishesActionCreator(localFishes);

      expect(localActionResult).toEqual(expectedAction);
    });
  });
});
describe("Given the addLocalFishesActionCreator function", () => {
  describe("When invoked with a group of 2 fishes", () => {
    test("Then it should return an object with the type of property 'add-local-fishes'", () => {
      const fish = [
        {
          id: 1,
          "file-name": "boris_fish",
        },
      ];

      const expectedLocalResult = {
        type: "add-local-fishes",
        fish,
      };

      const localActionResult = addLocalFishesActionCreator(fish);

      expect(localActionResult).toEqual(expectedLocalResult);
    });
  });
});
describe("Given the deleteLocalFishesActionCreator function", () => {
  describe("When invoked with a group of 2 fishes", () => {
    test("Then it should return an object with the type of property 'delete-local-fishes'", () => {
      const id = 3;
      const expectedLocalResult = {
        type: "delete-local-fishes",
        id,
      };
      const localActionResult = deleteLocalFishesActionCreator(id);

      expect(localActionResult).toEqual(expectedLocalResult);
    });
  });
});

describe("Given the modifyFishesActionCreator function", () => {
  describe("When invoked with a group of 3 fishes", () => {
    test("Then it should return an object with the type of property 'modify-local-fishes'", () => {
      const localFishes = [
        {
          id: 3,
          "file-name": "boris_fish",
        },
        {
          id: 2,
          "file-name": "Mariam_fish",
        },
        {
          id: 1,
          "file-name": "nacho_lil_fish",
        },
      ];
      const expectedLocalResult = {
        type: "modify-local-fishes",
        localFishes,
      };
      const localActionResult = modifyLocalFishesActionCreator(localFishes);

      expect(localActionResult).toEqual(expectedLocalResult);
    });
  });
});
