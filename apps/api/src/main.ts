import * as Koa from 'koa';
import init from './app/init';

const app = new Koa();

init(app).then(() => {
  const port = process.env.port || 3333;
  const server = app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/api');
  });
  server.on('error', console.error);
});
