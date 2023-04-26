import { useState } from 'react';

import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import {
  StyledForm,
  StyledFormControl,
  StyledFormBottomContainer,
  StyledLabel,
  StyledErrorMessage,
  StyledFormBottomMessage,
  StyledFormBottomLink,
} from './styles';

const Form = ({ inputs, handleSubmit, buttonText, formType }) => {
  const [notValid, setNotValid] = useState([]);

  const validateSubmit = (e) => {
    e.preventDefault();

    const NotValid = inputs.filter((input) =>
      !input.required ? false : input.value ? false : true
    );

    if (!NotValid.length) {
      setNotValid([]);
      handleSubmit();
    } else {
      setNotValid(NotValid);
    }
  };

  return (
    <StyledForm onSubmit={validateSubmit}>
      {inputs.map((input) => (
        <StyledFormControl key={input.label}>
          <StyledLabel>{input.label}</StyledLabel>
          <Input
            type={input.type}
            icon={input.icon}
            value={input.value}
            setValue={input.setValue}
            placeholder={input.placeholder}
          />
          {notValid.find((x) => x.label === input.label) && (
            <StyledErrorMessage>{input.errorMessage}</StyledErrorMessage>
          )}
        </StyledFormControl>
      ))}
      <StyledFormBottomContainer>
        <Button type='submit'>{buttonText}</Button>
        <StyledFormBottomMessage>
          {formType === 'register' ? (
            <>
              Already have an account?{' '}
              <StyledFormBottomLink>Login!</StyledFormBottomLink>
            </>
          ) : (
            <>
              Don't have an account?{' '}
              <StyledFormBottomLink>Sign Up!</StyledFormBottomLink>
            </>
          )}
        </StyledFormBottomMessage>
      </StyledFormBottomContainer>
    </StyledForm>
  );
};

export default Form;
