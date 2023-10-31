import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import React from 'react';
import { signUp } from 'tools/auth';

const RegistrationPage = () => {
  const registration = async body => {
    try {
      const response = await signUp(body);

      // return response.data;
      console.log('response', response);
    } catch (error) {
      console.error(error);
    }
  };

  return <RegistrationForm registration={registration} />;
};

export default RegistrationPage;
