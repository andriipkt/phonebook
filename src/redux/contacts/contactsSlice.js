import { createSlice } from '@reduxjs/toolkit';
import {
  addContactOp,
  deleteContactOp,
  editContact,
  fetchContactsOp,
} from './operations';
import {
  handleFulfilled,
  handleFulfilledAdd,
  handleFulfilledDelete,
  handleFulfilledEdit,
  handleFulfilledFetch,
  handlePending,
  handleRejected,
} from './helpers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContactsOp.fulfilled, handleFulfilledFetch)
      .addCase(addContactOp.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactOp.fulfilled, handleFulfilledDelete)
      .addCase(editContact.fulfilled, handleFulfilledEdit)
      .addMatcher(action => action.type.endsWith('/pending'), handlePending)
      .addMatcher(action => action.type.endsWith('/rejected'), handleRejected)
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        handleFulfilled
      );
  },
});

export const reducerContactsSlice = contactsSlice.reducer;
