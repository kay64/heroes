import { createAction } from '@reduxjs/toolkit';

import { AuthData } from './auth-module.types';

export const loginSubmitted = createAction<AuthData, 'auth/LOGIN_SUBMITTED'>(
  'auth/LOGIN_SUBMITTED',
);

export const loginFailed = createAction<string, 'auth/LOGIN_FAILED'>(
  'auth/LOGIN_FAILED',
);

export const loginCompleted = createAction<void, 'auth/LOGIN_COMPLETED'>(
  'auth/LOGIN_COMPLETED',
);

export const registrationSubmitted = createAction<
  AuthData,
  'auth/REGISTRATION_SUBMITTED'
>('auth/REGISTRATION_SUBMITTED');

export const registrationSucceed = createAction<
  void,
  'auth/REGISTRATION_SUCCEED'
>('auth/REGISTRATION_SUCCEED');

export const registrationFailed = createAction<
  string,
  'auth/REGISTRATION_FAILED'
>('auth/REGISTRATION_FAILED');
