import { createReducer } from '@reduxjs/toolkit';

import { appStarted, userAuthenticated } from './app.actions';
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
      })),
);

export default appReducer;
