import styled from "styled-components";

export const StyledHeroSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.palette.default.dark};
`;

export const StyledHeroContainer = styled.div`
  max-width: 1224px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 9rem 0 5rem;
  gap: 5em;

  h1 {
    color: ${(props) => props.theme.palette.default.light};
    text-align: center;
  }

  p {
    color: ${(props) => props.theme.palette.default.light};
    text-align: center;
  }
`;

export const StyledHeroContent = styled.div`
  max-width: 808px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5em;
`;

export const StyledFeaturesSectionWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
padding: 5em 0;
background-color: ${(props) => props.theme.palette.background.dark};

h1{
  color: ${(props) => props.theme.palette.default.light};
  justify-self: center;
    text-align: center;
    letter-spacing: -0.01em;
    font-weight: 400;
    margin-bottom: 2em;
}
`

export const StyledFeaturesContainer = styled.div`
margin: 0 24px;
display: grid;
grid-template-columns: 1fr;
gap: 1.5em;
max-width: 1224px;
margin-bottom: 112px;

@media screen and (min-width: 1085px) {
  grid-template-columns: repeat(3,1fr);
}
`