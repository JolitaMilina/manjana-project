import styled from "styled-components";

export const StyledFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.palette.default.main};
  height: 3.5rem;
  position: fixed;
  bottom: 0;

  p {
    color: ${(props) => props.theme.palette.background.light};
    text-align: center;
    weight: ${(props) => props.theme.typography.legal};
    size: ${(props) => props.theme.typography.legal};
  }
`;
