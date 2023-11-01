import { useState } from 'react';
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

    dispatch(logIn({ email, password }));

    setEmail('');
    setPassword('');
    // registration({
    //   name: name.value,
    //   email: email.value,
    //   password: password.value,
    // });
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
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            autoComplete="off"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
