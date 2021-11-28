import React, { useReducer } from 'react';

import { useDispatch } from 'react-redux';

import { Button, TextField } from '../../../shared';
import Stack from '../components/Stack';
import { loginSubmitted } from '../state/auth-module.actions';
import {
  initialState,
  passwordChanged,
  reducer,
  usernameChanged,
} from './LoginForm.state';

const LoginForm: React.FC = () => {
  const dispatch = useDispatch();
  const [state, localDispatch] = useReducer(reducer, initialState);

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
      <Button label="Log In" onClick={handleSubmit} />
    </Stack>
  );
};

export default LoginForm;
