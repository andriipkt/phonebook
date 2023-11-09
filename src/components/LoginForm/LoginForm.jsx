import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);

      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(logIn({ email, password }))
      .unwrap()
      .then(() =>
        toast.success('Welcome!', { duration: 2500, position: 'top-right' })
      )
      .catch(error =>
        toast.error('Invalid email or password', {
          duration: 2500,
          position: 'top-right',
        })
      );

    setEmail('');
    setPassword('');
  };

  return (
    <div className="card p-5 m-auto" style={{ maxWidth: '600px' }}>
      <div style={{ marginBottom: '20px' }}>
        <h3>
          Not registered yet? Follow the link to sign up now:{' '}
          <Link to="/register">Register</Link>
        </h3>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="LoginInputEmail"
            placeholder="name@example.com"
            name="email"
            onChange={handleChange}
            value={email}
          />
          <label htmlFor="LoginInputEmail">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="LoginInputPassword"
            placeholder="name@example.com"
            autoComplete="off"
            name="password"
            onChange={handleChange}
            value={password}
          />
          <label htmlFor="LoginInputPassword">Password</label>
        </div>

        {email && password ? (
          <button type="submit" className="btn btn-primary">
            Log in
          </button>
        ) : (
          <button type="submit" className="btn btn-primary" disabled>
            Log in
          </button>
        )}
      </form>
    </div>
  );
};

export default LoginForm;
