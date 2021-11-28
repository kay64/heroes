import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from '../../shared';
import { userUnauthenticated } from '../../state/app/app.actions';
import { getUser } from '../../state/app/app.selectors';
import { UserDropdown } from '../components';

const UserButton: React.FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  if (!user) {
    return <Link to="/auth/login">Login</Link>;
  }

  const handleLogout = () => {
    dispatch(userUnauthenticated());
  };

  return <UserDropdown email={user.email} onLogout={handleLogout} />;
};

export default UserButton;
