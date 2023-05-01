import styled from 'styled-components';

export const StyledSearchFilterWrapper = styled.div`
  margin: 1em;
  border-radius: 0.375em;
  box-shadow: 0 0.5em 1em -0.125em rgb(10 10 10 / 10%),
    0 0 0 1px rgb(10 10 10 / 2%);
`;

export const StyledTitleContainer = styled.div`
  padding: 1em 1.25em;
  border-radius: 0.375em 0.375em 0 0;
  background-color: ${(props) =>
    props.color
      ? props.theme.palette[props.color].main
      : props.theme.palette.default.main};

  h3 {
    font-size: 1.25em;
    line-height: 1.25;
    font-weight: 700;
    color: ${(props) => props.theme.palette.dark.main};
  }
`;

export const StyledSearchContainer = styled.div`
  padding: 0.5em 0.75em;
  border-bottom: ${(props) => `1px solid ${props.theme.palette.default.main}`};
`;

export const StyledFiltersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${(props) => `1px solid ${props.theme.palette.default.main}`};

  a {
    padding: 0.5em;
    display: inline-block;
    color: ${(props) => props.theme.palette.link.main};
    text-decoration: none;
    font-size: 0.875em;
    font-weight: 400;
    line-height: 1.5;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.palette.dark.main};
    }
  }

  a.selected {
    color: ${(props) => props.theme.palette.dark.main};
    box-shadow: ${(props) => `0 1px 0 ${props.theme.palette.dark.main}`};
  }
`;

export const StyledItemsContainer = styled.div`
  p {
    padding: 0.5em 0.75em;
    color: ${(props) => props.theme.palette.dark.main};
    border-bottom: ${(props) =>
    `1px solid ${props.theme.palette.default.main}`};

    span {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;

export const StyledPaginationContainer = styled.div`
  padding: 0.5em 0.75em;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  button {
    padding: 0.3em;
    border: none;
    background-color: ${(props) => props.theme.palette.default.main};
    cursor: pointer;
  }
`;

export const StyledButtonContainer = styled.div`
  padding: 0.5em 0.75em;
`;
