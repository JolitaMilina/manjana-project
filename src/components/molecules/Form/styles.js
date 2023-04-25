import styled from 'styled-components';

export const StyledForm = styled.form``;

export const StyledFormControl = styled.div`
  margin-bottom: 1rem;
`;

export const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
  display: block;
  color: ${(props) => props.theme.palette.background.light};
  font-family: var(--font-family-nunito-sans);
  font-size: ${(props) => props.theme.typography.h4.mobile};
  line-height: ${(props) => props.theme.typography.h4.mobile};
  font-weight: 800;
  text-transform: uppercase;
`;

export const StyledErrorMessage = styled.p`
  margin-top: .25rem;
  margin-bottom: 0.5rem;
  display: block;
  color: ${(props) => props.theme.palette.danger.main};
  font-size: ${(props) => props.theme.typography.legal};
  line-height: ${(props) => props.theme.typography.legal};
`;
