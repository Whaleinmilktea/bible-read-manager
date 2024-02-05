import styled from "styled-components";
import { laptopL, laptopS, mobile, tablet } from "../styles/media";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { AddIcon, HamburgerIcon } from "@chakra-ui/icons";

const Gnb = () => {
  return (
    <Wrapper>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Options"
          icon={<HamburgerIcon />}
          variant="Outline"
        />
        <MenuList>
          <MenuItem icon={<AddIcon />}>새 일정</MenuItem>
        </MenuList>
      </Menu>
    </Wrapper>
  );
};

export default Gnb;

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row-reverse;
  width: 100vw;
  height: 50px;

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
