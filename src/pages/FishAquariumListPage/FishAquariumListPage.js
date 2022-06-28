import { useContext, useEffect } from "react";
import FishAquariumList from "../../components/FishAquariumList/FishAquariumList";
import useAPI from "../../hooks/useAPI";
import { aquariumPage } from "../../paths/pages";
import FishesDataContext from "../../store/context/FishesDataContext";

const FishAquariumListPage = () => {
  const { loadFishes } = useAPI();
  const { fishes, setPage } = useContext(FishesDataContext);

  useEffect(() => {
    loadFishes();
    setPage(aquariumPage);
  }, [loadFishes, setPage]);

  return <FishAquariumList fishes={fishes} />;
};

export default FishAquariumListPage;
