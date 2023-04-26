import styled from 'styled-components';

export const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 56px);
`;

export const StyledHeroSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.palette.default.dark};
`;

export const StyledHeroContainer = styled.div`
  margin: 0 24px;
  max-width: 1224px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 9rem 0 5rem;
  gap: 5em;

  h1 {
    color: ${(props) => props.theme.palette.default.light};
    font-size: ${(props) => props.theme.typography.h1.mobile.fontSize};
    line-height: ${(props) => props.theme.typography.h1.mobile.lineHeight};
    text-align: center;
  }

  p {
    color: ${(props) => props.theme.palette.default.light};
    font-size: ${(props) => props.theme.typography.body.fontSize};
    line-height: ${(props) => props.theme.typography.body.lineHeight};
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    h1 {
    font-size: ${(props) => props.theme.typography.h1.tablet.fontSize};
    line-height: ${(props) => props.theme.typography.h1.tablet.lineHeight};
   }
  }

  @media screen and (min-width: 1024px) {
    h1 {
    font-size: ${(props) => props.theme.typography.h1.desktop.fontSize};
    line-height: ${(props) => props.theme.typography.h1.desktop.lineHeight};
   }
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

export const StyledHeroButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: 576px) {
    span {
      display: none;
    }
  }
`

export const StyledFeaturesSectionWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  padding: 5em 0;
  background-color: ${(props) => props.theme.palette.background.dark};

  h2 {
    color: ${(props) => props.theme.palette.default.light};
    justify-self: center;
    text-align: center;
    letter-spacing: -0.01em;
    margin-bottom: 2em;
    font-size: ${(props) => props.theme.typography.h2.mobile.fontSize};
    line-height: ${(props) => props.theme.typography.h2.mobile.lineHeight};
  }
`;

export const StyledFeaturesContainer = styled.div`
  margin: 0 24px;
  width: calc(100% - 48px);
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5em;
  max-width: 500px;

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    max-width: 1224px;
  }
`;
