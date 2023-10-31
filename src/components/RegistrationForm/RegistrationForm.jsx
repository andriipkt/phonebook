import React from 'react';

const RegistrationForm = ({ registration }) => {
  const handleSubmit = event => {
    event.preventDefault();

    const { name, email, password } = event.target.elements;
    registration({
      name: name.value,
      email: email.value,
      password: password.value,
    });
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
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
