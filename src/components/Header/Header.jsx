import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar bg-dark mb-3">
          <div className="container-fluid">
            <NavLink className="navbar-brand mb-0 h1 text-success" to="/">
              Home
            </NavLink>
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
