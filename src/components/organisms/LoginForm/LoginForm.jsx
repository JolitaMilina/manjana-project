import { useState } from 'react';
import Form from '../../molecules/Form';
import { API } from '../../../shared/api/api';
import { useSetRecoilState } from 'recoil';
import { isLoggedIn, userState } from '../../../shared/state/atoms';
import { StyledFormBottomMessage, StyledFormBottomButton } from './styles';

const LoginForm = ({ onClose, toggleForm }) => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const setUser = useSetRecoilState(userState);
  const setIsLoggedIn = useSetRecoilState(isLoggedIn);

  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const validateEmail = (value) => {
    setEmailError(null);
    if (!value) {
      setEmailError('Required');
    }
    setLogin((prev) => ({ ...prev, email: value }));
  };

  const validatePassword = (value) => {
    setPasswordError(null);
    if (!value) {
      setPasswordError('Required');
    }
    setLogin((prev) => ({ ...prev, password: value }));
  };

  const inputs = [
    {
      type: 'email',
      label: 'Email',
      placeholder: 'Enter your email...',
      value: login.email,
      setValue: validateEmail,
      required: true,
      errorMessage: emailError || 'Required',
    },
    {
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your password...',
      value: login.password,
      setValue: validatePassword,
      required: true,
      errorMessage: passwordError || 'Required',
    },
  ];

  const handleSubmit = async () => {
    validateEmail(login.email);
    validatePassword(login.password);

    if (emailError || passwordError) {
      return;
    }

    try {
      const users = await API.getUsers();
      const user = users.find((u) => u.email === login.email);
      if (user) {
        if (user.password === login.password) {
          setUser(user);
          setIsLoggedIn(true);
          localStorage.setItem('isLoggedIn', true);
          onClose();
          console.log(`Logged in as ${user.email}`);
        } else {
          setPasswordError('Your password is incorrect');
        }
      } else {
        setEmailError('This user does not exist');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      inputs={inputs}
      handleSubmit={handleSubmit}
      buttonText={'Log In'}
      customErrors={{
        ...((emailError && { Email: emailError }) || {}),
        ...((passwordError && { Password: passwordError }) || {}),
      }}
    >
      <StyledFormBottomMessage>
        Don't have an account?
        <StyledFormBottomButton onClick={toggleForm}>
          Sign Up!
        </StyledFormBottomButton>
      </StyledFormBottomMessage>
    </Form>
  );
};

export default LoginForm;
