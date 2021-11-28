import { ISagaModule } from 'redux-dynamic-modules-saga';

import auth from './auth-module.reducer';
import authModuleSagas from './auth-module.sagas';
import { AuthRootState } from './auth-module.types';

const getAuthModule = (): ISagaModule<AuthRootState> => ({
  id: 'auth',
  reducerMap: { auth },
  sagas: [authModuleSagas],
});

export default getAuthModule;
