import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  display: flex;
  padding: calc(0.625rem - 1px) calc(0.75rem - 1px);
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => props.theme.palette.default.main};
  border-radius: 0.375em;
  background-color: ${(props) => props.theme.palette.default.main};
`;

export const StyledIcon = styled.span`
  color: ${(props) => props.theme.palette.secondary.main};
`;

export const StyledInput = styled.input`
  width: 100%;
  outline: none;
  border: none;
  padding-left: calc(0.75em - 1px);
  font-size: ${(props) => props.theme.typography.body.fontSize};
  color: ${(props) => props.theme.palette.default.light};
  background-color: transparent;

  &::placeholder {
    color: ${(props) => props.theme.palette.background.main};
  }
`;
