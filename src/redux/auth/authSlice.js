import { handleFulfilled } from 'redux/contacts/helpers';
import { fetchCurrentUser, logIn, logOut, register } from './operations';
import {
  handleFulfilledFetchCurrentUser,
  handleFulfilledLogIn,
  handleFulfilledLogOut,
  handleFulfilledRegister,
  handlePending,
  handleRejected,
} from './helpers';

const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleFulfilledRegister)
      .addCase(logIn.fulfilled, handleFulfilledLogIn)
      .addCase(logOut.fulfilled, handleFulfilledLogOut)
      .addCase(fetchCurrentUser.fulfilled, handleFulfilledFetchCurrentUser)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export const reducerAuthSlice = authSlice.reducer;
