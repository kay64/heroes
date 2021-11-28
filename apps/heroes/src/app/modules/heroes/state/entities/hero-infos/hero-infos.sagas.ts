import { HeroInfo } from '@heroes/api-interfaces';
import { takeLatest, call, put } from 'redux-saga/effects';

import { heroesModuleLoaded } from '../../heroes-module.actions';
import { heroInfosLoaded } from './hero-infos.actions';
import heroInfosApi from './hero-infos.api';

function* moduleLoadedSaga() {
  let heroInfos: HeroInfo[] = [];
  try {
    heroInfos = yield call(heroInfosApi.get, 0, 20);
  } catch (e) {
    // todo: handle
    return;
  }

  yield put(heroInfosLoaded(heroInfos));
}

function* heroInfosSaga(): Generator {
  yield takeLatest(heroesModuleLoaded, moduleLoadedSaga);
}

export default heroInfosSaga;
