import { useState } from 'react';
import { isLoggedIn, userState } from '../../../shared/state/atoms';
import { useSetRecoilState } from 'recoil';
import { API } from '../../../shared/api/api';
import Form from '../../molecules/Form';
import { StyledFormBottomMessage, StyledFormBottomLink } from './styles';

const RegistrationForm = ({ onClose }) => {
  const [registration, setRegistration] = useState({
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
      value: registration.name,
      setValue: (value) =>
        setRegistration((prev) => ({ ...prev, name: value })),
      required: true,
      errorMessage: 'Required',
    },
    {
      type: 'text',
      label: 'Surname',
      placeholder: 'Enter your surname...',
      value: registration.surname,
      setValue: (value) =>
        setRegistration((prev) => ({ ...prev, surname: value })),
      required: true,
      errorMessage: 'Required',
    },
    {
      type: 'email',
      label: 'Email',
      placeholder: 'Enter your email...',
      value: registration.email,
      setValue: (value) =>
        setRegistration((prev) => ({ ...prev, email: value })),
      required: true,
      errorMessage: 'Required',
    },
    {
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your password...',
      value: registration.password,
      setValue: (value) =>
        setRegistration((prev) => ({ ...prev, password: value })),
      required: true,
      errorMessage: 'Required',
    },
  ];

  const handleSubmit = async () => {
    try {
      const newUser = await API.createUser(registration);
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
        Already have an account?{' '}
        <StyledFormBottomLink>Log In!</StyledFormBottomLink>
      </StyledFormBottomMessage>
    </Form>
  );
};

export default RegistrationForm;
