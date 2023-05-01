import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: ${(props) => (props.size === 'large' ? '9px 20px' : '7px 16px')};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.outline === 'outline'
      ? props.theme.palette.secondary.main
      : 'transparent'};
  border-radius: 0.375em;
  font-size: ${(props) =>
    props.size === 'large' ? '18px' : props.theme.typography.body.fontSize};
  font-weight: 600;
  line-height: ${(props) => props.theme.typography.body.lineHeight};
  letter-spacing: ${(props) => props.theme.typography.body.letterSpacing};
  text-align: center;
  cursor: pointer;
  color: ${(props) =>
    props.outline === 'outline'
      ? props.theme.palette.default.light
      : props.inverted === 'inverted'
        ? props.theme.palette.default.light
        : props.theme.palette.default.main};
  background-color: ${(props) =>
    props.outline === 'outline'
      ? 'transparent'
      : props.inverted === 'inverted'
        ? 'transparent'
        : props.theme.palette.primary.main};
  transition: all 100ms;

  &:active {
    background-color: ${(props) =>
    props.outline === 'outline'
      ? props.theme.palette.secondary.main
      : props.inverted === 'inverted'
        ? props.theme.palette.secondary.main
        : props.theme.palette.primary.dark};
  }

  &:focus {
    background-color: ${(props) =>
    props.focused === 'focused'
      ? props.theme.palette.secondary.main
      : 'transparent'};
  }

  @media screen and (min-width: 1024px) {
    &:active {
      background-color: transparent;
    }

    &:hover {
    background-color: ${(props) =>
    props.outline === 'outline'
      ? props.theme.palette.secondary.main
      : props.inverted === 'inverted'
        ? props.theme.palette.secondary.main
        : props.theme.palette.primary.dark};

    }
  }
`;
