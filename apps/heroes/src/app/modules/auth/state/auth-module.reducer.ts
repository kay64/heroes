import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import { userAuthenticated } from '../../../state/app/app.actions';
import {
  loginCompleted,
  loginFailed,
  loginSubmitted,
  registrationSubmitted,
} from './auth-module.actions';
import { AuthData, AuthModuleState } from './auth-module.types';

const reduceAuthAction = (
  state: AuthModuleState,
  { payload }: PayloadAction<AuthData>,
): AuthModuleState => ({
  ...state,
  email: payload.email,
  password: payload.password,
  error: undefined,
  state: 'SUBMITTED',
});

const initialState: AuthModuleState = {
  email: '',
  password: '',

  error: undefined,

  state: 'STARTED',
};

const authModuleReducer = createReducer<AuthModuleState>(
  initialState,
  (builder) =>
    builder
      .addCase(loginSubmitted, reduceAuthAction)
      .addCase(registrationSubmitted, reduceAuthAction)
      .addCase(userAuthenticated, (state) => ({
        ...state,
        state: 'OPERATION_SUCCESSFUL',
      }))
      .addCase(loginFailed, (state, { payload }) => ({
        ...state,
        error: payload,
        state: 'OPERATION_FAILED',
      }))
      .addCase(loginCompleted, () => initialState),
);

export default authModuleReducer;
