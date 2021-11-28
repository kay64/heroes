import createHeroAccessor from './db/accessors/heroes.accessor';
import { Pool } from 'pg';

export type Ctx = {
  db: Pool;
  accessors: {
    heroes: ReturnType<typeof createHeroAccessor>;
  };
};
