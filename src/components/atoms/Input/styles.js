import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  padding: calc(.625rem - 1px) calc(.75rem - 1px);
  border-width: 1px;
  border-style: solid;
  border-color: none;
  border-radius: 0.375em;
  background-color: ${(props) => (props.theme.palette.default.main)};
`;

export const StyledIcon = styled.span`
  color: ${(props) => (props.theme.palette.background.light)};
`;

export const StyledInput = styled.input`
  outline: none;
  border: none;
  padding-left: calc(0.75em - 1px);
  font-size: ${(props) => (props.theme.typography.body)};
  color: ${(props) => (props.theme.palette.default.light)};
  background-color: transparent;

  &::placeholder {
    color: ${(props) => (props.theme.palette.background.light)};
  }
`;
