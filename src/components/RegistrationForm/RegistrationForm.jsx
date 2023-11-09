import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);

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

    dispatch(register({ name, email, password }))
      .unwrap()
      .then(() =>
        toast.success('Welcome!', { duration: 2500, position: 'top-right' })
      )
      .catch(error => {
        console.error(error);
        toast.error(`We already have user with this email address - ${email}`, {
          duration: 3000,
          position: 'top-right',
        });
      });

    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="card p-5 m-auto" style={{ maxWidth: '600px' }}>
      <h3 style={{ marginBottom: '30px' }}>Registration</h3>
      <div className="form-text" style={{ marginBottom: '8px' }}>
        We'll never share your personal info with anyone else.
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="RegistrInputName"
            placeholder="name@example.com"
            name="name"
            onChange={handleChange}
            value={name}
          />
          <label htmlFor="RegistrInputName">Username</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="RegistrInputEmail"
            placeholder="name@example.com"
            name="email"
            onChange={handleChange}
            value={email}
          />
          <label htmlFor="RegistrInputEmail">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="RegistrInputPassword"
            placeholder="name@example.com"
            name="password"
            autoComplete="off"
            onChange={handleChange}
            value={password}
          />
          <label htmlFor="RegistrInputPassword">Password</label>
        </div>

        {name && email && password ? (
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        ) : (
          <button type="submit" className="btn btn-primary" disabled>
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default RegistrationForm;
