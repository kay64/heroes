import createAuthService from './auth.service';

type PromiseValue<P> = P extends Promise<infer V> ? V : never;

export type AuthService = PromiseValue<ReturnType<typeof createAuthService>>;

export type Services = {
  auth: AuthService;
};
