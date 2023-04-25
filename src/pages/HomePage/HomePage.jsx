import BoxCard from '../../components/molecules/BoxCard/BoxCard';
import {StyledFeaturesSectionWrapper, StyledFeaturesContainer} from './styles';
import ICONS from '../../shared/icons';

import {
  StyledHeroSectionWrapper,
  StyledHeroContainer,
  StyledHeroContent,
} from "./styles";

import Button from "../../components/atoms/Button/Button";

const HomePage = () => {
  return (
    <>
    <StyledHeroSectionWrapper>
      <StyledHeroContainer>
        <StyledHeroContent>
          <h1>Best TODO app in Town!</h1>
          <p>
            Use this marvellous tool to structurize <br></br> your day and gain
            back control of your life!
          </p>
        </StyledHeroContent>
        <Button action={() => {}}>Sign Up</Button>
      </StyledHeroContainer>
    </StyledHeroSectionWrapper>
    <StyledFeaturesSectionWrapper>
      <h1>How does it work?</h1>
    <StyledFeaturesContainer>
    <BoxCard icon={ICONS.addUser} title={'STEP ONE'} desc={'Simply signup or login to your account to view your TODO list!'}/>
    <BoxCard icon={ICONS.list} title={'STEP TWO'} desc={'Add your items and organize them by selecting the tasks you want to modify.'}/>
    <BoxCard icon={ICONS.sort} title={'STEP THREE'} desc={"Filter your TODO list to see what you have and haven't done yet!"}/>
     </StyledFeaturesContainer>
   </StyledFeaturesSectionWrapper>
   </>
  );
};

export default HomePage;
