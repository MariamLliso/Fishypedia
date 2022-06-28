import { useContext, useEffect } from "react";
import FishAquariumList from "../../components/FishAquariumList/FishAquariumList";
import useAPI from "../../hooks/useAPI";
import { fishTankPage } from "../../paths/pages";
import FishesDataContext from "../../store/context/FishesDataContext";

const FishTankListPage = () => {
  const { loadLocalFishes } = useAPI();
  const { localFishes, setPage } = useContext(FishesDataContext);

  useEffect(() => {
    loadLocalFishes();
    setPage(fishTankPage);
  }, [loadLocalFishes, setPage]);

  return <FishAquariumList fishes={localFishes} />;
};
export default FishTankListPage;
