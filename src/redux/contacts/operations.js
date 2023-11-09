import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const fetchContactsOp = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContactOp = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', newContact);
      Notify.success('New contact added!');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContactOp = createAsyncThunk(
  'contacts/deleteContact',
  async (contactID, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactID}`);
      Notify.success('Contact deleted!');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (contactData, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(
        `/contacts/${contactData.contactId}`,
        contactData.body
      );

      Notify.success('Contact updated!');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
