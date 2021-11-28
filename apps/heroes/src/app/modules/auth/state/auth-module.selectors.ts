import { AuthRootState, State } from './auth-module.types';

export const getAuthState = (state: AuthRootState): State => state.auth.state;
