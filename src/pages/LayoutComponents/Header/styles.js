import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  background-color: ${(props) => (props.theme.palette.default.main)};
`

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1224px;
`;

export const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 12px;
  cursor: pointer;

  span {
   font-size: 30px;
   color: ${(props) => (props.theme.palette.primary.main)};
  }

  h1 {
    font-size: 30px;
    color: ${(props) => (props.theme.palette.default.light)};
  }
`;

export const StyledBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75em;
`;
