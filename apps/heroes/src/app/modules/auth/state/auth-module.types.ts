export type AuthData = {
  email: string;
  password: string;
};

export type State =
  | 'STARTED'
  | 'SUBMITTED'
  | 'OPERATION_SUCCESSFUL'
  | 'OPERATION_FAILED';

export type AuthModuleState = {
  email: string;
  password: string;

  error: string | undefined;

  state: State;
};

export type AuthRootState = {
  auth: AuthModuleState;
};
