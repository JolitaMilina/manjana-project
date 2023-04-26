import styled from 'styled-components';

export const StyledFormBottomMessage = styled.p`
  font-size: 14px;
  line-height: ${(props) => props.theme.typography.body.lineHeight};
  letter-spacing: ${(props) => props.theme.typography.body.letterSpacing};
  color: ${(props) => props.theme.palette.background.light};
`;

export const StyledFormBottomLink = styled.a`
  font-size: 14px;
  line-height: ${(props) => props.theme.typography.body.lineHeight};
  letter-spacing: ${(props) => props.theme.typography.body.letterSpacing};
  color: ${(props) => props.theme.palette.primary.main};
  cursor: pointer;
`;
