import { useState } from 'react';
import Form from '../../molecules/Form';
import { API } from '../../../shared/api/api';
import { useSetRecoilState } from 'recoil';
import { isLoggedIn, userState } from '../../../shared/state/atoms';
import { StyledFormBottomMessage, StyledFormBottomLink } from './styles';

const LoginForm = ({ onClose }) => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const setUser = useSetRecoilState(userState);
  const setIsLoggedIn = useSetRecoilState(isLoggedIn);

  const inputs = [
    {
      type: 'email',
      label: 'Email',
      placeholder: 'Enter your email...',
      value: login.email,
      setValue: (value) => setLogin((prev) => ({ ...prev, email: value })),
      required: true,
      errorMessage: 'Required',
    },
    {
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your password...',
      value: login.password,
      setValue: (value) => setLogin((prev) => ({ ...prev, password: value })),
      required: true,
      errorMessage: 'Required',
    },
  ];

  const handleSubmit = async () => {
    try {
      const users = await API.getUsers();
      const user = users.find(
        (u) => u.email === login.email && u.password === login.password
      );
      if (user) {
        setUser(user);
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', true);
        onClose();
        console.log(`Logged in as ${user.email}`);
      } else {
        console.log('Invalid email or password!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form inputs={inputs} handleSubmit={handleSubmit} buttonText={'Log In'}>
      <StyledFormBottomMessage>
        Don't have an account?{' '}
        <StyledFormBottomLink>Sign Up!</StyledFormBottomLink>
      </StyledFormBottomMessage>
    </Form>
  );
};

export default LoginForm;
