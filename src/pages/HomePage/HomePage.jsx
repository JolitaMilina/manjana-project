import {
  StyledHeroSectionWrapper,
  StyledHeroContainer,
  StyledHeroContent,
} from "./styles";

import Button from "../../components/atoms/Button/Button";

const HomePage = () => {
  return (
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
  );
};

export default HomePage;
