import styled from "styled-components";
import { mobile, tablet, laptopS, laptopL } from "../styles/media";
import CsvTest from "./csv-test";
import Dashboard from "./dashboard";

const Main = () => {
  return (
      <Wrapper>
        <CsvTest />
        <Dashboard />
      </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  padding: 20px;

  @media ${mobile} {
    margin-top: 30px;
    background-color: #f6f6f6;
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
