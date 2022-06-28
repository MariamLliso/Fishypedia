import styled from "styled-components";
import theme from "../../theme/theme";

const FishStyle = styled.div`
  background: #faf4ed;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 10px;
  align-content: center;

  .fish-container__header {
    align-items: center;
    position: relative;
    margin-bottom: 20px;
  }

  li {
    gap: 10px;
  }

  .fish-icon__container {
    margin: 0;
    padding: 0;
    background-color: ${theme.blueDark};
    display: flex;
    width: 90px;
    height: 90px;
    margin: 0;
    padding: 0;
    justify-content: center;
    border-radius: 50px;
    align-items: center;
    position: absolute;
    right: 0;
    top: -60px;
  }

  .fish-icon__image {
    width: auto;
    height: 70px;
  }

  .fish-container {
    width: inherit;
    margin: 0;
    display: flex;
    flex-direction: column;
    padding: 20px;
  }

  ul {
    padding: 0 20px;
  }
  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .fish-container__name {
    font-size: 2em;
    margin: 0;
    color: #583e3b;
    font-weight: 800;
    margin: 0;
    width: 70%;
  }
  .fish {
    margin-bottom: 20px;
  }

  .fish-container__monthDisplay,
  .fish-container__hourDisplay,
  .fish-container__locationDisplay,
  .fish-container__rarityDisplay {
    padding: 5px;
    width: 100%;
    border-radius: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    font-weight: 700;
    i {
      flex-grow: 1;
    }
    span {
      flex-grow: 5;
    }
  }

  .fish-container__monthDisplay,
  .fish-container__hourDisplay {
    background: ${theme.greenDark};
    color: ${theme.greenDarkTextColor};
    font-size: 1.3em;
  }

  .fish-container__locationDisplay,
  .fish-container__rarityDisplay {
    background: ${theme.brownLight};
    color: ${theme.brownDarkTextColor};
    font-size: 1em;
    text-transform: uppercase;
  }

  .fish-container__button {
    margin-top: 10px;
  }
`;

export default FishStyle;
