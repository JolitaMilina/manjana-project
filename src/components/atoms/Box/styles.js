import styled from "styled-components";

export const StyledBox = styled.div`
  width: 100%;
  padding: 2.25em;
  background-color: ${(props) => props.theme.palette.default.main};
  box-shadow: 0 0.5em 1em -0.125em rgba($scheme-invert, 0.1),
    0 0px 0 1px rgba($scheme-invert, 0.02);
  border-radius: 0.375em;

`;
