import styled from "styled-components";
import { mobile, tablet, laptopS, laptopL } from "../src/styles/media";
import "./App.css";
import Gnb from "./layouts/gloval-nav-bar";
import Fnb from "./layouts/foot-nav-bar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <Wrapper>
      <Gnb />
      <Main>
        <Outlet />
      </Main>
      <Fnb />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;

  @media ${mobile} {
    background-color: #f1f1f1;
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

const Main = styled.div`
  padding: 20px;

  @media ${mobile} {
    margin-top: 30px;
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
