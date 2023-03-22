import Koa from 'koa';
import api from './router';
import bodyParser from 'koa-bodyparser';
import cors from 'kcors';

export const app = new Koa()
  .use(cors())
  .use(async (ctx, next) => {
    await next();
  })
  .use(bodyParser())
  .use(api.routes())
  .use(api.allowedMethods());
