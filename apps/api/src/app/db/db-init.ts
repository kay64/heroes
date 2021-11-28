import { Pool } from 'pg';
import * as Koa from 'koa';
import createHeroAccessor from './accessors/heroes.accessor';

const dbInit = async (app: Koa) => {
  const db = new Pool({
    user: 'local',
    host: 'localhost',
    database: 'postgres',
    password: 'local',
    port: 5432,
  });

  await db.connect();

  app.context.db = db;
  app.context.accessors = {
    heroes: createHeroAccessor(db),
  };
};

export default dbInit;
