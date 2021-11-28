import { put, takeLatest } from 'redux-saga/effects';

import { http } from '../../utils';
import {
  appStarted,
  userAuthenticated,
  userUnauthenticated,
} from './app.actions';

const TOKEN_KEY = 'TOKEN';

function userAuthenticatedSaga(action: ReturnType<typeof userAuthenticated>) {
  const token = action.payload.token;

  localStorage.setItem(TOKEN_KEY, token);
  http.updateToken(token);
}

function userUnauthenticatedSaga() {
  localStorage.removeItem(TOKEN_KEY);
  http.updateToken(undefined);
}

function* appStartedSaga() {
  const token = localStorage.getItem(TOKEN_KEY);

  if (!token) {
    return;
  }

  const sections = token.split('.');
  const json = atob(sections[1]);
  const claims = JSON.parse(json) as { email: string; exp: number };

  const expires = new Date(0);
  expires.setUTCSeconds(claims.exp);
  console.log('appStartedSaga', expires, new Date());
  if (expires < new Date()) {
    return;
  }

  yield put(
    userAuthenticated({
      email: claims.email,
      token: token,
    }),
  );
}

function* appSaga(): Generator {
  yield takeLatest(appStarted, appStartedSaga);
  yield takeLatest(userAuthenticated, userAuthenticatedSaga);
  yield takeLatest(userUnauthenticated, userUnauthenticatedSaga);
}

export default appSaga;
