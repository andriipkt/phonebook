import { combineReducers } from 'redux';
import { reducerContactsSlice } from './contacts/contactsSlice';
import { reducerFilterSlice } from './filter/filterSlice';
import { reducerAuthSlice } from './auth/authSlice';

export const rootReducer = combineReducers({
  contacts: reducerContactsSlice,
  filter: reducerFilterSlice,
  authentication: reducerAuthSlice,
});
