import { useState } from 'react';
import Form from '../../molecules/Form';
import { API } from '../../../shared/api/api';
import { useSetRecoilState } from 'recoil';
import { isLoggedIn, userState } from '../../../shared/state/atoms';

const RegistrationForm = () => {
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
      await API.createUser(registration);
      console.log('User created successfully!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form
      formType={'register'}
      inputs={inputs}
      handleSubmit={handleSubmit}
      buttonText={'SignUp'}
    />
  );
};

export default RegistrationForm;
