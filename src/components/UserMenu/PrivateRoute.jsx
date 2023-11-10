import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/selectors';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  const location = useLocation();

  return shouldRedirect ? (
    <Navigate to={location.state ?? '/login'} />
  ) : (
    children
  );
};

export default PrivateRoute;
