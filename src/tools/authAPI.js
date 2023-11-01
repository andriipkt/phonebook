import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const signUp = async credentials => {
  console.log('credentials', credentials);
  const response = await axios.post('/users/signup', credentials);

  return response.data;
};
