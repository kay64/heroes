import { call, put, takeLatest } from 'redux-saga/effects';

import { userAuthenticated } from '../../../state/app/app.actions';
import {
  loginFailed,
  loginSubmitted,
  registrationFailed,
  registrationSubmitted,
  registrationSucceed,
} from './auth-module.actions';
import authApi from './auth-module.api';

function* loginSubmittedSaga(action: ReturnType<typeof loginSubmitted>) {
  const { payload: data } = action;

  try {
    const response: { token: string } = yield call(authApi.login, data);
    yield put(
      userAuthenticated({
        email: data.email,
        token: response.token,
      }),
    );
  } catch (e) {
    // todo: add guard
    const error = e as Error;
    yield put(loginFailed(error.message));
  }
}

function* registrationSubmittedSaga(
  action: ReturnType<typeof registrationSubmitted>,
) {
  const { payload: data } = action;
  try {
    yield call(authApi.register, data);
    yield put(registrationSucceed());
  } catch (e) {
    // todo: add guard
    const error = e as Error;
    yield put(registrationFailed(error.message));
  }
}

function* authModuleSagas(): Generator {
  yield takeLatest(loginSubmitted, loginSubmittedSaga);
  yield takeLatest(registrationSubmitted, registrationSubmittedSaga);
}

export default authModuleSagas;
