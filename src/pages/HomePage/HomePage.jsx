import { useState } from 'react';
import BoxCard from '../../components/molecules/BoxCard/BoxCard';
import {
  StyledContentContainer,
  StyledFeaturesSectionWrapper,
  StyledFeaturesContainer,
  StyledHeroSectionWrapper,
  StyledHeroContainer,
  StyledHeroContent,
  StyledHeroButtons,
} from './styles';
import ICONS from '../../shared/icons';
import Modal from '../../components/molecules/Modal/Modal';
import Button from '../../components/atoms/Button/Button';
import RegistrationForm from '../../components/organisms/RegistrationForm/RegistrationForm';

const HomePage = () => {
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
      <StyledContentContainer>
        <StyledHeroSectionWrapper>
          <StyledHeroContainer>
            <StyledHeroContent>
              <h1>Best TODO app in Town!</h1>
              <p>
                Use this marvellous tool to structurize <br></br> your day and
                gain back control of your life!
              </p>
            </StyledHeroContent>
            <StyledHeroButtons>
              <span>
                <Button
                  action={handleLoginClick}
                  outline='outline'
                  size='large'
                >
                  Login
                </Button>
              </span>
              <Button action={handleSignUpClick} size='large'>
                Sign Up
              </Button>
            </StyledHeroButtons>
          </StyledHeroContainer>
        </StyledHeroSectionWrapper>
        <StyledFeaturesSectionWrapper>
          <h2>How does it work?</h2>
          <StyledFeaturesContainer>
            <BoxCard
              icon={ICONS.addUser}
              title={'STEP ONE'}
              desc={
                'Simply signup or login to your account to view your TODO list!'
              }
            />
            <BoxCard
              icon={ICONS.list}
              title={'STEP TWO'}
              desc={
                'Add your items and organize them by selecting the tasks you want to modify.'
              }
            />
            <BoxCard
              icon={ICONS.sort}
              title={'STEP THREE'}
              desc={
                "Filter your TODO list to see what you have and haven't done yet!"
              }
            />
          </StyledFeaturesContainer>
        </StyledFeaturesSectionWrapper>
      </StyledContentContainer>
      {showLoginModal && (
        <Modal onClose={() => setShowLoginModal(false)} title='Login'>
          <h3>Login form component</h3>
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

export default HomePage;
