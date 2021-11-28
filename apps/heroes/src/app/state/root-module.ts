import { ISagaModule } from 'redux-dynamic-modules-saga';

import { appStarted } from './app/app.actions';
import app from './app/app.reducer';
import appSaga from './app/app.sagas';
import { RootModuleState } from './root-module.types';

const getRootModule = (): ISagaModule<RootModuleState> => ({
  id: 'root',
  reducerMap: { app },
  sagas: [appSaga],
  initialActions: [appStarted()],
});

export default getRootModule;
