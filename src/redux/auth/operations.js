const { createAsyncThunk } = require('@reduxjs/toolkit');
const { signUp } = require('tools/authAPI');

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const response = await signUp(credentials);

    return response;
  } catch (error) {
    console.error(error);
  }
});

// const logIn = createAsyncThunk('auth/login', async credentials => {
//   try {
//     const response = await signUp
//   } catch (error) {

//   }
// })
