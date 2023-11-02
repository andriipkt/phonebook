import { combineReducers } from 'redux';
import { reducerContactsSlice } from './contacts/contactsSlice';
import { reducerFilterSlice } from './filter/filterSlice';
import { reducerAuthSlice } from './auth/authSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const persistedReducerAuthSlice = persistReducer(
  persistConfig,
  reducerAuthSlice
);

export const rootReducer = combineReducers({
  contacts: reducerContactsSlice,
  filter: reducerFilterSlice,
  authentication: persistedReducerAuthSlice,
});
