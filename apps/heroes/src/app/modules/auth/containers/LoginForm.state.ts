import { PayloadAction } from '@reduxjs/toolkit';

export type FormState = {
  email: string;
  password: string;
  usernameError: string | undefined;
  passwordError: string | undefined;
};

export type UsernameChangedAction = PayloadAction<string, 'username_changed'>;
export type PasswordChangedAction = PayloadAction<string, 'password_changed'>;
export type FormAction = UsernameChangedAction | PasswordChangedAction;

export const initialState: FormState = {
  email: '',
  password: '',
  usernameError: undefined,
  passwordError: undefined,
};

export const reducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case 'username_changed':
      return {
        ...state,
        email: action.payload,
      };
    case 'password_changed':
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};

export const usernameChanged = (payload: string): UsernameChangedAction => ({
  type: 'username_changed',
  payload,
});

export const passwordChanged = (payload: string): PasswordChangedAction => ({
  type: 'password_changed',
  payload,
});
