import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactAsync,
  deleteContactAsync,
  getContactsAsync,
} from 'tools/contactsAPI';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const fetchContactsOp = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await getContactsAsync();
      console.log('contacts', contacts);
      return contacts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContactOp = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const response = await addContactAsync(newContact);
      Notify.success('New contact added!');
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContactOp = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, { rejectWithValue }) => {
    try {
      const response = await deleteContactAsync(contactID);
      Notify.success('Contact deleted!');
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
