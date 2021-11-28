import { Accessors } from '../db/accessors';
import createAuthService from './auth.service';

export * from './types';

export default async (accessors: Accessors) => {
  return {
    auth: await createAuthService(accessors.users),
  };
};
