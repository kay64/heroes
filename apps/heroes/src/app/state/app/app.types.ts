export type User = {
  email: string;
  token: string;
};

export type State = 'NOT_STARTED' | 'STARTED' | 'INITIALIZED' | 'STOPPED';

export type AppState = {
  user: User | undefined;
  state: State;
};
