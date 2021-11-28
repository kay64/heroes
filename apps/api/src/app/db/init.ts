import { Pool } from 'pg';
import createHeroAccessor from './accessors/heroes.accessor';
import { createUsersAccessor } from './accessors';

const init = async () => {
  // todo: environment variable
  const db = new Pool({
    user: 'local',
    host: 'localhost',
    database: 'postgres',
    password: 'local',
    port: 5432,
  });

  await db.connect();

  return {
    heroes: createHeroAccessor(db),
    users: createUsersAccessor(db),
  };
};

export default init;
