import { createAction } from '@reduxjs/toolkit';

import { User } from './app.types';

export const appStarted = createAction<void, 'app/STARTED'>('app/STARTED');

export const userAuthenticated = createAction<User, 'app/USER_AUTHENTICATED'>(
  'app/USER_AUTHENTICATED',
);
