import styled from "styled-components";
import { laptopL, laptopS, mobile, tablet } from "../styles/media";

const Gnb = () => {
  return (
    <Wrapper>
      <div>gnb</div>
    </Wrapper>
  );
};

export default Gnb;

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row-reverse;
  top: 0;
  width: 100vw;
  height: 40px;

  @media ${mobile} {
  }

  @media ${tablet} {
  }

  @media ${laptopS} {
  }

  @media ${laptopL} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
