import { useState } from "react";
import ICONS from "../../../shared/icons";
import Button from "../../../components/atoms/Button/Button.jsx";
import Modal from "../../../components/molecules/Modal/Modal";
import { StyledHeader, StyledNav, StyledLogo, StyledBtnContainer } from "./styles.js";

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleSignUpClick = () => {
    setShowSignUpModal(true);
  };

  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledLogo>
            <span>{ICONS.logo}</span>
            <h1>mañana</h1>
          </StyledLogo>
          <StyledBtnContainer>
            <Button action={handleLoginClick} outline='outline'>Login</Button>
            <Button action={handleSignUpClick}>Sign Up</Button>
          </StyledBtnContainer>
        </StyledNav>
      </StyledHeader>
      {showLoginModal && (
        <Modal onClose={() => setShowLoginModal(false)} title='Login'>
          <h3>Login form</h3>
        </Modal>
      )}
      {showSignUpModal && (
        <Modal onClose={() => setShowSignUpModal(false)} title='Sign Up'>
          <h3>Signup form</h3>
        </Modal>
      )}
    </>
  );
};

export default Header;
