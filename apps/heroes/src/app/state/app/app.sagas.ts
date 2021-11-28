import { takeLatest } from 'redux-saga/effects';

import { appStarted } from './app.actions';

function* appStartedSaga() {
  const token = localStorage.getItem('TOKEN');
}

function* appSaga(): Generator {
  yield takeLatest(appStarted, appStartedSaga);
}

export default appSaga;
