import { useState } from 'react';
import { isLoggedIn, userState } from '../../../shared/state/atoms';
import { useSetRecoilState } from 'recoil';
import { API } from '../../../shared/api/api';
import Form from '../../molecules/Form';
import { StyledFormBottomMessage, StyledFormBottomButton } from './styles';

const SignupForm = ({ onClose, toggleForm }) => {
  const [signup, setSignup] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  });

  const setUser = useSetRecoilState(userState);
  const setIsLoggedIn = useSetRecoilState(isLoggedIn);

  const inputs = [
    {
      type: 'text',
      label: 'Name',
      placeholder: 'Enter your name...',
      value: signup.name,
      setValue: (value) =>
        setSignup((prev) => ({ ...prev, name: value })),
      required: true,
      errorMessage: 'Required',
    },
    {
      type: 'text',
      label: 'Surname',
      placeholder: 'Enter your surname...',
      value: signup.surname,
      setValue: (value) =>
        setSignup((prev) => ({ ...prev, surname: value })),
      required: true,
      errorMessage: 'Required',
    },
    {
      type: 'email',
      label: 'Email',
      placeholder: 'Enter your email...',
      value: signup.email,
      setValue: (value) =>
        setSignup((prev) => ({ ...prev, email: value })),
      required: true,
      errorMessage: 'Required',
    },
    {
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your password...',
      value: signup.password,
      setValue: (value) =>
        setSignup((prev) => ({ ...prev, password: value })),
      required: true,
      errorMessage: 'Required',
    },
  ];

  const handleSubmit = async () => {
    try {
      const newUser = await API.createUser(signup);
      setIsLoggedIn(true);
      setUser(newUser);
      localStorage.setItem('isLoggedIn', true);
      onClose();
      console.log('User created successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form inputs={inputs} handleSubmit={handleSubmit} buttonText={'Sign Up'}>
      <StyledFormBottomMessage>
        Already have an account?
        <StyledFormBottomButton onClick={toggleForm}>Log In!</StyledFormBottomButton>
      </StyledFormBottomMessage>
    </Form>
  );
};

export default SignupForm;
