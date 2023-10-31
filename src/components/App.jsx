import { useDispatch, useSelector } from 'react-redux';

// import Header from './Header/Header';
// import Phonebook from './Phonebook/Phonebook';
// import Filter from './Phonebook/Phonebook';
// import ContactList from './ContactList/ContactList';

import { lazy, useEffect } from 'react';
import { fetchContactsOp } from 'redux/contacts/operations';
import { selectError } from 'redux/selectors';
import Error from './Error/Error';
import { Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home/Home'));
const RegistrationPage = lazy(() =>
  import('pages/Registration/RegistrationPage')
);
const LoginPage = lazy(() => import('pages/Login/LoginPage'));
const Header = lazy(() => import('./Header/Header'));
const Phonebook = lazy(() => import('./Phonebook/Phonebook'));
const Filter = lazy(() => import('./Phonebook/Phonebook'));
const ContactList = lazy(() => import('./ContactList/ContactList'));

export function App() {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContactsOp());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/phonebook" element={<Phonebook />}>
          <Route path="" element={<Filter />} />
          <Route path="" element={error ? <Error /> : <ContactList />} />
        </Route>
      </Route>
    </Routes>
  );
}
