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
