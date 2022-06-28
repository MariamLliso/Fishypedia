import { NavLink } from "react-router-dom";
import styled from "styled-components";
import theme from "../../theme/theme";

const MobileNavbarStyle = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;

  .mobile-navbar__icon-button {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .mobile-navbar__image--home {
    width: 20px;
  }
  .mobile-navbar__image--fish {
    width: 30px;
  }

  .mobile-navbar__tittle {
    margin-bottom: 0;
    margin-top: 10px;
    color: ${theme.brownDark};
    font-size: 0.8em;
    font-weight: 800;
    text-transform: uppercase;
  }
`;

const Navigation = () => {
  return (
    <MobileNavbarStyle>
      <NavLink to="Aquarium">
        <div className="mobile-navbar__icon-button">
          <img
            className="mobile-navbar__image--home"
            src="images/home.png"
            alt="Navigation icon to Fish Aquarium"
            width="20px"
          />
          <h4 className="mobile-navbar__tittle">Aquarium</h4>
        </div>
      </NavLink>

      <NavLink to="FishTank">
        <div className="mobile-navbar__icon-button">
          <img
            className="mobile-navbar__image--fish"
            src="images/favicon.png"
            alt="Navigation icon to Fish tank"
            width="30px"
          />
          <h4 className="mobile-navbar__tittle">Fish Tank</h4>
        </div>
      </NavLink>
    </MobileNavbarStyle>
  );
};

export default Navigation;
