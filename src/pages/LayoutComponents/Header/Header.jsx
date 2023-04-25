import React from "react";
import ICONS from "../../../shared/icons";
import Button from "../../../components/atoms/Button/Button.jsx";
import { StyledHeader, StyledNav, StyledLogo, StyledBtnContainer } from "./styles.js";

const Header = () => {

  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledLogo>
            <span>{ICONS.logo}</span>
            <h1>mañana</h1>
          </StyledLogo>
          <StyledBtnContainer>
            <Button action={() => { }} outline='outline'>Login</Button>
            <Button action={() => { }}>Sign Up</Button>
          </StyledBtnContainer>
        </StyledNav>
      </StyledHeader>
    </>
  );
};

export default Header;
