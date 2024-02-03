import styled from "styled-components";
import { mobile, tablet, laptopS, laptopL } from "../src/styles/media";
import { Spinner } from '@chakra-ui/react'


import "./App.css";

function App() {
  return (
    <Wrapper>
      <Spinner color="red.600" />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  @media ${mobile} {
    background-color: #f0d95c;
  }

  @media ${tablet} {
    background-color: #6e86a4;
  }

  @media ${laptopS} {
    background-color: #4f5b66;
  }

  @media ${laptopL} {
    background-color: #e3e4e5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
