import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import { loginSubmitted, registrationSubmitted } from './auth-module.actions';
import { AuthData, AuthModuleState } from './auth-module.types';

const reduceAuthAction = (
  state: AuthModuleState,
  { payload }: PayloadAction<AuthData>,
): AuthModuleState => ({
  ...state,
  email: payload.email,
  password: payload.password,
  error: undefined,
  loading: true,
});

const authModuleReducer = createReducer<AuthModuleState>(
  {
    email: '',
    password: '',

    error: undefined,
    loading: false,
  },
  (builder) =>
    builder
      .addCase(loginSubmitted, reduceAuthAction)
      .addCase(registrationSubmitted, reduceAuthAction),
);

export default authModuleReducer;
