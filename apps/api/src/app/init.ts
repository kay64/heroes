import heroesController from './contollers/heroes.controller';
import dbInit from './db/db-init';
import * as Koa from 'koa';
import * as KoaRouter from 'koa-router';
import * as json from 'koa-json';
import * as logger from 'koa-logger';
import errorHandling from './middlewares/error-handling';
import * as bodyParser from 'koa-bodyparser';

const init = async (app: Koa) => {
  await dbInit(app);

  const root = new KoaRouter();
  const api = new KoaRouter();
  api.use('/heroes', heroesController.routes());

  root.use('/api', api.routes());

  app.use(errorHandling());
  app.use(logger());
  app.use(bodyParser());
  app.use(json());
  app.use(root.routes());
};

export default init;
