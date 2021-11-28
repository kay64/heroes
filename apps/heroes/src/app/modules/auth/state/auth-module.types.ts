export type AuthData = {
  email: string;
  password: string;
};

export type AuthModuleState = {
  email: string;
  password: string;

  error: string | undefined;
  loading: boolean;
};

export type AuthRootState = {
  auth: AuthModuleState;
};
