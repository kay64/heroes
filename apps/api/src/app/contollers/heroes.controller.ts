import * as KoaRouter from 'koa-router';
import { HeroInput } from '../db/dto';
import { createError } from '../utils';
import { AppCtx } from '../types';

const heroesController = new KoaRouter<void, AppCtx>()
  .get('/:id', async (ctx) => {
    const id = Number(ctx.params['id']);
    if (!id) {
      throw Error('Bad identifier.');
    }

    const hero = await ctx.accessors.heroes.getById(id);
    if (!hero) {
      const error = createError(`There is no Hero with id = ${id}`);

      ctx.response.status = 404;
      ctx.response.body = error;
    } else {
      ctx.response.status = 200;
      ctx.response.body = hero;
    }
  })
  .get('/', async (ctx) => {
    const offset: number = Number(ctx.request.query['offset']) || 0;
    const limit: number = Number(ctx.request.query['limit']) || 20;

    ctx.response.body = await ctx.accessors.heroes.getAll({ offset, limit });
  })
  .post('/', async (ctx) => {
    const input = ctx.request.body as HeroInput;

    const hero = await ctx.accessors.heroes.create(input);

    ctx.response.status = 201;
    ctx.response.body = hero;
    ctx.response.set('Location', `/api/heroes/${hero.id}`);
  });

export default heroesController;
