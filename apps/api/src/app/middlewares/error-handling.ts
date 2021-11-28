import { Context, Next } from 'koa';
import { createError } from '../utils';

const errorHandling = () => {
  return async (ctx: Context, next: Next): Promise<void> => {
    try {
      await next();
    } catch (e) {
      console.error(e);
      const error = createError(e.message);
      ctx.response.status = 500;
      ctx.response.body = error;
    }
  };
};

export default errorHandling;
