import { createError } from '../utils';
import * as KoaRouter from 'koa-router';
import { AppCtx } from '../types';
import { UserData } from '@heroes/api-interfaces';

const authController = new KoaRouter<void, AppCtx>()
  .post('/login', async (ctx) => {
    const body = ctx.request.body as UserData;
    const token = await ctx.services.auth.login(body.email, body.password);

    console.log('--->', body);
    if (token) {
      ctx.response.status = 200;
      ctx.response.body = { token };
    } else {
      ctx.response.status = 400;
      ctx.response.body = createError(
        'There is no user with such email and password.',
      );
    }
  })
  .post('/register', async (ctx) => {
    const body = ctx.request.body as UserData;
    await ctx.services.auth.register(body.email, body.password);
    ctx.response.status = 204;
  });

export default authController;
