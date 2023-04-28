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
    todos: [],
  });

  const setUser = useSetRecoilState(userState);
  const setIsLoggedIn = useSetRecoilState(isLoggedIn);

  const [nameError, setNameError] = useState(null);
  const [surnameError, setSurnameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const isNameValid = (name) => /^[a-zA-Z\s]*$/.test(name);
  const isSurnameValid = (surname) => /^[a-zA-Z\s]*$/.test(surname);

  const validatePassword = (password) => {
    const hasNumber = /\d/;
    const isValid = password.length >= 8 && hasNumber.test(password);

    if (!password) {
      setPasswordError('Required');
    } else if (!isValid) {
      setPasswordError(
        'The password must contain at least 8 characters and have at least 1 number'
      );
    } else {
      setPasswordError(null);
    }
  };

  const inputs = [
    {
      type: 'text',
      label: 'Name',
      placeholder: 'Enter your name...',
      value: signup.name,
      setValue: (value) => {
        setNameError(null);
        if (!isNameValid(value)) {
          setNameError('Name can only contain letters and spaces.');
        }
        if (!value) {
          setNameError('Required');
        }
        setSignup((prev) => ({ ...prev, name: value }));
      },
      required: true,
      errorMessage: nameError || 'Required',
    },
    {
      type: 'text',
      label: 'Surname',
      placeholder: 'Enter your surname...',
      value: signup.surname,
      setValue: (value) => {
        setSurnameError(null);
        if (!isSurnameValid(value)) {
          setSurnameError('Surname can only contain letters and spaces.');
        }
        if (!value) {
          setSurnameError('Required');
        }
        setSignup((prev) => ({ ...prev, surname: value }));
      },
      required: true,
      errorMessage: surnameError || 'Required',
    },
    {
      type: 'email',
      label: 'Email',
      placeholder: 'Enter your email...',
      value: signup.email,
      setValue: async (value) => {
        setEmailError(null);
        if (!value) {
          setEmailError('Required');
        }
        setSignup((prev) => ({ ...prev, email: value }));

        const users = await API.getUsers();
        const emailExists = users.some((user) => user.email === value);
        if (emailExists) {
          setEmailError('Email already exists. Please use another email.');
        }
      },
      required: true,
      errorMessage: emailError || 'Required',
    },
    {
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your password...',
      value: signup.password,
      setValue: (value) => {
        if (!value) {
          setPasswordError('Required');
        } else {
          validatePassword(value);
        }
        setSignup((prev) => ({ ...prev, password: value }));
      },
      required: true,
      errorMessage: passwordError || 'Required',
    },
  ];

  const handleSubmit = async () => {
    const hasErrors = nameError || surnameError || emailError || passwordError;

    if (hasErrors) {
      return;
    }

    try {
      const users = await API.getUsers();
      const emailExists = users.some((user) => user.email === signup.email);

      if (emailExists) {
        setEmailError('Email already exists. Please use another email.');
      } else {
        const newUser = await API.createUser(signup);
        setIsLoggedIn(true);
        setUser(newUser);
        localStorage.setItem('isLoggedIn', true);
        onClose();
        console.log('User created successfully!');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      inputs={inputs}
      handleSubmit={handleSubmit}
      buttonText={'Sign Up'}
      customErrors={{
        ...((emailError && { Email: emailError }) || {}),
        ...((nameError && { Name: nameError }) || {}),
        ...((surnameError && { Surname: surnameError }) || {}),
        ...((passwordError && { Password: passwordError }) || {}),
      }}
    >
      <StyledFormBottomMessage>
        Already have an account?
        <StyledFormBottomButton onClick={toggleForm}>
          Log In!
        </StyledFormBottomButton>
      </StyledFormBottomMessage>
    </Form>
  );
};

export default SignupForm;
