import { Accessors } from './db/accessors';
import { Services } from './services';

export type AppCtx = {
  accessors: Accessors;
  services: Services;
};
