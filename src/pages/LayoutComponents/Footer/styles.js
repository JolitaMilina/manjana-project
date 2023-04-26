import styled from 'styled-components';

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${(props) => props.theme.palette.default.main};
  height: 3.5rem;
  position: relative;
  bottom: 0;

  p {
    color: ${(props) => props.theme.palette.background.light};
    font-size: ${(props) => props.theme.typography.legal.fontSize};
    text-align: center;
  }
`;
