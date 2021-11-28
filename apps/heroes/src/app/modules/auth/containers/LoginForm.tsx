import React, { useEffect, useReducer } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Button, TextField } from '../../../shared';
import Stack from '../components/Stack';
import { loginCompleted, loginSubmitted } from '../state/auth-module.actions';
import { getAuthState } from '../state/auth-module.selectors';
import {
  initialState,
  passwordChanged,
  reducer,
  usernameChanged,
} from './LoginForm.state';

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const authState = useSelector(getAuthState);
  const [state, localDispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  useEffect(() => {
    if (authState === 'OPERATION_SUCCESSFUL') {
      navigate('/');
      dispatch(loginCompleted());
    }
  }, [authState, navigate, dispatch]);

  const loading = authState === 'SUBMITTED';

  const handleSubmit = () => {
    dispatch(
      loginSubmitted({
        email: state.email,
        password: state.password,
      }),
    );
  };

  return (
    <Stack>
      <TextField
        placeholder="Email"
        type="text"
        value={state.email}
        onChange={(value) => localDispatch(usernameChanged(value))}
      />
      <TextField
        placeholder="Password"
        type="password"
        value={state.password}
        onChange={(value) => localDispatch(passwordChanged(value))}
      />
      <Button
        label="Log In"
        onClick={handleSubmit}
        loading={loading}
        disabled={loading}
      />
    </Stack>
  );
};

export default LoginForm;
