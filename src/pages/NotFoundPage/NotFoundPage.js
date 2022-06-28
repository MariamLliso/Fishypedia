import styled from "styled-components";
import theme from "../../theme/theme";

const NotFoundStyle = styled.div`
  margin: 120px 20px 20px 20px;
  color: ${theme.brownDark};
  padding: 10px;
  background-color: ${theme.white};
  border-radius: 10px;

  h1 {
    text-align: center;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundStyle>
      <h1>404</h1>
      <h2>It seems that you have not found any fishes...</h2>
    </NotFoundStyle>
  );
};
export default NotFoundPage;
