import { useState } from 'react';
import ICONS from '../../../shared/icons';
import Button from '../../../components/atoms/Button/Button.jsx';
import Modal from '../../../components/molecules/Modal/Modal';
import {
  StyledHeader,
  StyledNav,
  StyledLogo,
  StyledBtnContainer,
} from './styles.js';
import RegistrationForm from '../../../components/organisms/RegistrationForm/RegistrationForm';
import LoginForm from '../../../components/organisms/LoginForm/LoginForm';

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
            <Button action={handleLoginClick} outline='outline'>
              Log In
            </Button>
            <Button action={handleSignUpClick}>Sign Up</Button>
          </StyledBtnContainer>
        </StyledNav>
      </StyledHeader>
      {showLoginModal && (
        <Modal onClose={() => setShowLoginModal(false)} title='Log In'>
          <LoginForm />
        </Modal>
      )}
      {showSignUpModal && (
        <Modal onClose={() => setShowSignUpModal(false)} title='Sign Up'>
          <RegistrationForm />
        </Modal>
      )}
    </>
  );
};

export default Header;
