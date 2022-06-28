import Fish from "../Fish/Fish";
import styled from "styled-components";

const FishListStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 70px;
  margin-top: 150px;
  margin-bottom: 30px;
`;

const FishAquariumList = ({ fishes }) => {
  return (
    <>
      <FishListStyle>
        {fishes.slice(0, 9).map((fish) => (
          <li className="fish" key={fish.id}>
            <Fish fish={fish} />
          </li>
        ))}
      </FishListStyle>
    </>
  );
};

export default FishAquariumList;
