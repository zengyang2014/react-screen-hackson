import KoaRouter from 'koa-router';
import {scadaCache} from './scada'

const api =  new KoaRouter();



api.get('/scada',
  async (ctx, next) => {
    const data = scadaCache.getCache()
    ctx.body = {
      data: JSON.stringify(data),
    };
  });

api.patch('/scada/:key',
  async (ctx, next) => {
    const {key} = ctx.params
    const {value} = ctx.request.body as any

    scadaCache.setCacheByKey(key, value)
    ctx.body = {
      data: 'success'
    };
    ctx.status = 200;
  });

api.put('/scada/plcport',
  async (ctx, next) => {
    const {key} = ctx.params
    const plcPortValues = ctx.request.body as {[key:string]: boolean|number|string}

    scadaCache.setPlcPortValues(plcPortValues)
    ctx.body = {
      data: 'success'
    };
    ctx.status = 200;
  });

export default api;