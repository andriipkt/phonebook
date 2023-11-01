import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContactsAsync = async () => {
  const response = await axios.get('/contacts');

  return response.data;
};

export const addContactAsync = async newContact => {
  const response = await axios.post('/contacts', newContact);

  return response.data;
};

export const deleteContactAsync = async contactID => {
  const response = await axios.delete(`/contacts/${contactID}`);
  return response.data;
};
