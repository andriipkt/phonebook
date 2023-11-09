import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log('isLoggedIn', isLoggedIn);
  const location = useLocation();

  return isLoggedIn ? children : <Navigate to={location.state ?? '/login'} />;
};

export default PrivateRoute;
