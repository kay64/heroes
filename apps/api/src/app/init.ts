import * as KoaApplication from 'koa';
import * as json from 'koa-json';
import * as logger from 'koa-logger';
import { errorHandling, router } from './middlewares';
import * as bodyParser from 'koa-bodyparser';
import db from './db';
import services from './services';
import { AppCtx } from './types';

const init = async (app: KoaApplication<void, AppCtx>) => {
  app.context.accessors = await db();
  app.context.services = await services(app.context.accessors);

  app.use(errorHandling());
  app.use(logger());
  app.use(bodyParser());
  app.use(json());
  app.use(router());
};

export default init;
