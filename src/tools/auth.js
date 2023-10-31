import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const signUp = async body => {
  console.log('body', body);
  const response = await axios.post('/users/signup', body);

  return response.data;
};
