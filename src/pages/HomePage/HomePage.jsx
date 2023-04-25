import BoxCard from '../../components/molecules/BoxCard/BoxCard';
import {
  StyledContentContainer,
  StyledFeaturesSectionWrapper,
  StyledFeaturesContainer,
  StyledHeroSectionWrapper,
  StyledHeroContainer,
  StyledHeroContent,
} from './styles';
import ICONS from '../../shared/icons';

import Button from '../../components/atoms/Button/Button';

const HomePage = () => {
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
            <Button action={() => {}}>Sign Up</Button>
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
    </>
  );
};

export default HomePage;
