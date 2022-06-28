import { endpoint } from "../paths/endpoint";
import { useCallback, useContext } from "react";
import FishesDataContext from "../store/context/FishesDataContext";
import {
  addLocalFishesActionCreator,
  deleteLocalFishesActionCreator,
  loadFishesActionCreator,
  loadLocalFishesActionCreator,
} from "../store/actions/actionCreators";

const useAPI = () => {
  const urlAPI = process.env.REACT_APP_API_URL;
  const localUrlAPI = process.env.REACT_APP_LOCAL_API_URL;
  const { dispatch, localDispatch } = useContext(FishesDataContext);

  const loadFishes = useCallback(async () => {
    const response = await fetch(`${urlAPI}${endpoint.fish}`);
    const dataFishes = await response.json();
    dispatch(loadFishesActionCreator(dataFishes));
    return dataFishes;
  }, [urlAPI, dispatch]);

  const loadLocalFishes = useCallback(async () => {
    const response = await fetch(`${localUrlAPI}${endpoint.fish}`);
    const dataFishes = await response.json();
    localDispatch(loadLocalFishesActionCreator(dataFishes));
    return dataFishes;
  }, [localDispatch, localUrlAPI]);

  const addToFishTank = async (newFish) => {
    const response = await fetch(`${localUrlAPI}${endpoint.fish}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFish),
    });
    if (response.ok) {
      const fish = await response.json();
      localDispatch(addLocalFishesActionCreator(fish));
      return fish;
    }
  };

  const deleteFishFromFishTank = async (id) => {
    const response = await fetch(`${localUrlAPI}${endpoint.fish}/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      localDispatch(deleteLocalFishesActionCreator(id));
    }
  };

  return { loadFishes, loadLocalFishes, addToFishTank, deleteFishFromFishTank };
};

export default useAPI;
