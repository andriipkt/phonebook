import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUpAPI = async credentials => {
  console.log('credentialsSignUp', credentials);
  const { data } = await axios.post('/users/signup', credentials);
  token.set(data.token);
  return data;
};

export const LogInAPI = async credentials => {
  console.log('credentials Log In', credentials);
  const { data } = await axios.post('/users/login', credentials);
  token.set(data.token);
  return data;
};

export const LogOutAPI = async () => {
  const response = await axios.post('/users/logout');
  token.unset();
  console.log('Log out');

  return response;
};
