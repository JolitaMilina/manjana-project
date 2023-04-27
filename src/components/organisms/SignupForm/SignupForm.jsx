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

  const [emailError, setEmailError] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [surnameError, setSurnameError] = useState(null);

  const isNameValid = (name) => /^[a-zA-Z\s]*$/.test(name);
  const isSurnameValid = (surname) => /^[a-zA-Z\s]*$/.test(surname);

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
      setValue: (value) => {
        setEmailError(null);
        setSignup((prev) => ({ ...prev, email: value }));
      },
      required: true,
      errorMessage: emailError || 'Required',
    },
    {
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your password...',
      value: signup.password,
      setValue: (value) => setSignup((prev) => ({ ...prev, password: value })),
      required: true,
      errorMessage: 'Required',
    },
  ];

  const handleSubmit = async () => {
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
