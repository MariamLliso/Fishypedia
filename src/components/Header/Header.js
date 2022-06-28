import { useContext } from "react";
import styled from "styled-components";
import { aquariumPage, fishTankPage } from "../../paths/pages";
import FishesDataContext from "../../store/context/FishesDataContext";
import theme from "../../theme/theme";

const HeaderStyle = styled.ul`
  box-shadow: 0px -1px 50px 0px rgba(${theme.brownDarkRgb}, 0.4);
  background: ${theme.blueDark};
  font-family: inherit;
  height: 88px;
  color: ${theme.brownDarkTextColor};
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;

  li {
    margin: 0 20px 10px 20px;
  }
  h1,
  h2 {
    margin: auto 0;
    font-weight: 800;
  }
  h1 {
    font-size: 1.8em;
  }
  h2 {
    font-size: 1.2em;
  }
`;

const Header = () => {
  const { page } = useContext(FishesDataContext);

  return (
    <HeaderStyle>
      <li>
        <h1>Fishypedia</h1>
      </li>
      <li>
        {page === aquariumPage ? <h2>AQUARIUM</h2> : ""}
        {page === fishTankPage ? <h2>FISH TANK</h2> : ""}
      </li>
    </HeaderStyle>
  );
};

export default Header;
