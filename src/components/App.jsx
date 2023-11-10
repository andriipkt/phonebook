import { useDispatch, useSelector } from 'react-redux';

import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import { fetchCurrentUser } from 'redux/auth/operations';
import PrivateRoute from './UserMenu/PrivateRoute';
import PublicRoute from './UserMenu/PublicRoute';
import { Toaster } from 'react-hot-toast';
import { selectLoadingAuth } from 'redux/selectors';

const Home = lazy(() => import('pages/Home/Home'));
const RegistrationPage = lazy(() =>
  import('pages/Registration/RegistrationPage')
);
const LoginPage = lazy(() => import('pages/Login/LoginPage'));
const Phonebook = lazy(() => import('./Phonebook/Phonebook'));

export function App() {
  const dispatch = useDispatch();
  const isloading = useSelector(selectLoadingAuth);
  console.log('auth', isloading);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Toaster />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <RegistrationPage />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/phonebook"
              element={
                <PrivateRoute>
                  <Phonebook />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
