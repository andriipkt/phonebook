import Refresh from 'components/Refresh/Refresh';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectLoadingAuth, selectUsername } from 'redux/selectors';

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
  },

  userName: {
    color: '#ffc107',
    margin: '0',
    fontWeight: '500',
    fontSize: '20px',
  },
};

const UserMenu = () => {
  const username = useSelector(selectUsername);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingAuth);

  return (
    <div style={styles.wrapper}>
      <p style={styles.userName}>Hello, {username}</p>
      <button
        type="button"
        className="btn btn-outline-danger"
        onClick={() => dispatch(logOut())}
        style={{}}
      >
        Logout
      </button>
      {isLoading && <Refresh />}
    </div>
  );
};

export default UserMenu;
