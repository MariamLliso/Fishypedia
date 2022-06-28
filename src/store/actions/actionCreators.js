import {
  addLocalFishesActionType,
  loadFishesActionType,
  loadLocalFishesActionType,
  deleteLocalFishesActionType,
  modifyLocalFishesActionType,
} from "./actionTypes";

export const loadFishesActionCreator = (fishes) => ({
  type: loadFishesActionType,
  fishes,
});
export const loadLocalFishesActionCreator = (localFishes) => ({
  type: loadLocalFishesActionType,
  localFishes,
});
export const addLocalFishesActionCreator = (fish) => ({
  type: addLocalFishesActionType,
  fish,
});
export const deleteLocalFishesActionCreator = (id) => ({
  type: deleteLocalFishesActionType,
  id,
});
export const modifyLocalFishesActionCreator = (localFishes) => ({
  type: modifyLocalFishesActionType,
  localFishes,
});
