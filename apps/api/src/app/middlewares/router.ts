import * as KoaRouter from 'koa-router';
import heroesController from '../contollers/heroes.controller';
import authController from '../contollers/auth.controller';

const router = () => {
  const root = new KoaRouter();
  const api = new KoaRouter();

  api.use('/heroes', heroesController.routes());
  api.use('/auth', authController.routes());

  root.use('/api', api.routes());
  return root.routes();
};

export default router;
