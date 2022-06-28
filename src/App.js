import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import FishAquariumListPage from "./pages/FishAquariumListPage/FishAquariumListPage";
import FishTankListPage from "./pages/FishTankListPage/FishTankListPage";
import styled from "styled-components";
import theme from "./theme/theme";
import backgroundImage from "./images/mobile-background.png";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const ContainerStyle = styled.div`
  background: linear-gradient(
      180deg,
      rgba(${theme.bluelightRgb}, 0.95) 0%,
      rgba(${theme.blueDarkRgb}, 0.95) 100%
    ),
    url(${backgroundImage});
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;

  .header {
    position: fixed;
    width: 100%;
    z-index: 1;
  }
`;

function App() {
  return (
    <ContainerStyle>
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<FishAquariumListPage />} />
          <Route path="Aquarium" element={<FishAquariumListPage />} />
          <Route path="FishTank" element={<FishTankListPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </ContainerStyle>
  );
}

export default App;
