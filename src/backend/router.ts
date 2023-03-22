import KoaRouter from 'koa-router';
import {scadaCache} from './data'

const api =  new KoaRouter();



api.get('/scada',
  async (ctx, next) => {
    const data = scadaCache.getCache()
    ctx.body = {
      data: JSON.stringify(data),
    };
  });

api.post('/scada/:key',
  async (ctx, next) => {
    const {key} = ctx.params
    const {value} = ctx.request.body as any

    scadaCache.setCacheByKey(key, value)

    ctx.status = 201;
  });

export default api;