import { RootModuleState } from '../root-module.types';
import { User } from './app.types';

export const getUser = (state: RootModuleState): User | undefined =>
  state.app.user;
