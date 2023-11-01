import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUsername } from 'redux/selectors';

const UserMenu = () => {
  const username = useSelector(selectUsername);
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', color: 'white' }}>
      <p>Hello, {username}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
