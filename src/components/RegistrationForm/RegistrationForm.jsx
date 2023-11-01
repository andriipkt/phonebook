import React, { useState } from 'react';
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

    dispatch(register({ name, email, password }));
    setName('');
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
      <h3 style={{ marginBottom: '30px' }}>Registration</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Username
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputName"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            autoComplete="off"
            onChange={handleChange}
            value={password}
          />
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
