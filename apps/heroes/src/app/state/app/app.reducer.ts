import { createReducer } from '@reduxjs/toolkit';

import {
  appStarted,
  userAuthenticated,
  userUnauthenticated,
} from './app.actions';
import { AppState } from './app.types';

const appReducer = createReducer<AppState>(
  {
    user: undefined,
    state: 'NOT_STARTED',
  },
  (builder) =>
    builder
      .addCase(appStarted, (state) => ({ ...state, state: 'STARTED' }))
      .addCase(userAuthenticated, (state, { payload }) => ({
        ...state,
        state: 'INITIALIZED',
        user: payload,
      }))
      .addCase(userUnauthenticated, (state) => ({
        ...state,
        user: undefined,
      })),
);

export default appReducer;
