import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { isLoggedIn } from '../../../shared/state/atoms';
import Button from '../../../components/atoms/Button/Button.jsx';
import ICONS from '../../../shared/icons';
import Modal from '../../../components/molecules/Modal/Modal';
import SignupForm from '../../../components/organisms/SignupForm/SignupForm';
import LoginForm from '../../../components/organisms/LoginForm/LoginForm';
import {
  StyledHeader,
  StyledNav,
  StyledLogo,
  StyledBtnContainer,
  StyledLogoutButtonContainer,
  StyledInitialButtonContainer,
} from './styles.js';

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const [loggedIn, setIsLoggedIn] = useRecoilState(isLoggedIn);

  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowLoginModal(true);
    setShowSignUpModal(false);
  };

  const handleSignUpClick = () => {
    setShowSignUpModal(true);
    setShowLoginModal(false);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    localStorage.clear();
  };

  const handleNavigateLogo = () => {
    navigate('');
  };

  return (
    <>
      <StyledHeader>
        <StyledNav>
          <StyledLogo onClick={handleNavigateLogo}>
            <span>{ICONS.logo}</span>
            <h1>mañana</h1>
          </StyledLogo>
          <StyledBtnContainer>
            {loggedIn && (
              <StyledLogoutButtonContainer>
                <Button action={handleLogoutClick} outline='outline'>
                  Log Out
                </Button>
              </StyledLogoutButtonContainer>
            )}
            {!loggedIn && (
              <StyledInitialButtonContainer>
                <Button action={handleLoginClick} outline='outline'>
                  Log In
                </Button>
                <Button action={handleSignUpClick}>Sign Up</Button>
              </StyledInitialButtonContainer>
            )}
          </StyledBtnContainer>
        </StyledNav>
      </StyledHeader>
      {showLoginModal && (
        <Modal onClose={() => setShowLoginModal(false)} title='Log In'>
          <LoginForm onClose={() => setShowLoginModal(false)} toggleForm={handleSignUpClick} />
        </Modal>
      )}
      {showSignUpModal && (
        <Modal onClose={() => setShowSignUpModal(false)} title='Sign Up'>
          <SignupForm onClose={() => setShowSignUpModal(false)} toggleForm={handleLoginClick} />
        </Modal>
      )}
    </>
  );
};

export default Header;
