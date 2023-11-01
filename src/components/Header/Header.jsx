import UserMenu from 'components/UserMenu/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <header>
        <nav className="navbar bg-dark mb-3">
          <div className="container-fluid">
            <div>
              <NavLink className="navbar-brand mb-0 h1 text-success" to="/">
                Home
              </NavLink>
              {isLoggedIn && (
                <NavLink
                  to="/phonebook"
                  className="navbar-brand mb-0 h1 text-success"
                >
                  Phonebook
                </NavLink>
              )}
            </div>
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <div style={{ display: 'flex', gap: '20px' }}>
                <NavLink
                  to="/register"
                  className="navbar-brand mb-0 h1 text-success"
                >
                  Register
                </NavLink>
                <NavLink
                  to="/login"
                  className="navbar-brand mb-0 h1 text-success"
                >
                  Log in
                </NavLink>
              </div>
            )}
          </div>
        </nav>
      </header>
      <main>
        <Suspense fallback={null}>
          <div className="container">
            <Outlet />
          </div>
        </Suspense>
      </main>
    </>
  );
};

export default Header;
