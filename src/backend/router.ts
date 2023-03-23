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

api.patch('/scada/material',
  async (ctx, next) => {
    const {key} = ctx.params
    const {value} = ctx.request.body as any
    console.log('收到请求')
    scadaCache.subMateria()
    console.log(JSON.stringify(scadaCache.getCache()))
    ctx.body = {
      data: 'success'
    };
    ctx.status = 200;
  });

api.patch('/scada/product', async (ctx, next) => {
  const {status} = ctx.request.body as any

  console.log('收到请求', status)
  scadaCache.updateProduct(status)
  console.log(JSON.stringify(scadaCache.getCache()))
  ctx.body = {
    data: 'success'
  };
  ctx.status = 200;
})

export default api;