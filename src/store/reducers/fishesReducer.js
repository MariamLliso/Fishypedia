import { loadFishesActionType } from "../actions/actionTypes";

const fishesReducer = (actualFishes, action) => {
  let newFishes;

  if (action.type === loadFishesActionType) {
    newFishes = [...action.fishes];
    return newFishes;
  }
  newFishes = [...actualFishes];
  return newFishes;
};

export default fishesReducer;
