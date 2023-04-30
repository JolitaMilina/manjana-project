import styled from 'styled-components';

export const StyledContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 56px);
  background-color: ${(props) => props.theme.palette.default.dark};
`;

export const StyledTodoListSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 64px;
`;

export const StyledTodoListTitle = styled.h2`
  padding: 7.5rem 0 0;
  text-transform: capitalize;
  font-size: ${(props) => (props.theme.typography.h2.mobile.fontSize)};
  color: ${(props) => (props.theme.palette.default.light)};

  @media screen and (min-width: 768px){
    font-size: ${(props) => (props.theme.typography.h2.tablet.fontSize)};
  }

  @media screen and (min-width: 1024px){
    font-size: ${(props) => (props.theme.typography.h2.desktop.fontSize)};
  }
`;

export const StyledTodoSystemContainer = styled.div`
  max-width: 63.5rem;
  width: calc(100% - 3rem);
  margin: 0 1.5rem;
`;
