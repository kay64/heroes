import { createStore } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';

import getRootModule from './root-module';
import { RootModuleState } from './root-module.types';

const store = createStore<RootModuleState>({
  extensions: [getSagaExtension()],
});

store.addModule(getRootModule());

export default store;
