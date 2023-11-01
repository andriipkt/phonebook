const { createAsyncThunk } = require('@reduxjs/toolkit');
const { signUpAPI, LogInAPI, LogOutAPI } = require('tools/authAPI');

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const response = await signUpAPI(credentials);

    return response;
  } catch (error) {
    console.error(error);
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const response = await LogInAPI(credentials);

    return response;
  } catch (error) {
    console.error(error);
  }
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    return await LogOutAPI();
  } catch (error) {
    console.error(error);
  }
});
