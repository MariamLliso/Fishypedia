import {
  loadLocalFishesActionType,
  addLocalFishesActionType,
  deleteLocalFishesActionType,
} from "../actions/actionTypes";

const localFishesReducer = (localFishes, action) => {
  let newLocalFishes;

  switch (action.type) {
    case loadLocalFishesActionType:
      newLocalFishes = [...action.localFishes];
      break;

    case addLocalFishesActionType:
      newLocalFishes = [...localFishes, action.fish];
      break;

    case deleteLocalFishesActionType:
      newLocalFishes = localFishes.filter((fish) => fish.id !== action.id);
      break;

    default:
      newLocalFishes = [...localFishes];
      break;
  }
  return newLocalFishes;
};

export default localFishesReducer;
