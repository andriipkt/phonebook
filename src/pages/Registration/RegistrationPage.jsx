import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from 'tools/authAPI';

const RegistrationPage = () => {
  const navigate = useNavigate();

  // const registration = async body => {};

  return <RegistrationForm />;
};

export default RegistrationPage;
