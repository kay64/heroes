import * as KoaApplication from 'koa';
import init from './app/init';
import { AppCtx } from './app/types';

const app = new KoaApplication<void, AppCtx>();

init(app).then(() => {
  const port = process.env.port || 3333;
  const server = app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/api');
  });
  server.on('error', console.error);
});
