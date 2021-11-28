import { IModule } from 'redux-dynamic-modules';

import app from './app/app.reducer';
import { RootModuleState } from './root-module.types';

const getRootModule = (): IModule<RootModuleState> => ({
  id: 'root',
  reducerMap: { app },
});

export default getRootModule;
