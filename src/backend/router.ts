import KoaRouter from 'koa-router';
import {scadaCache} from './scada';
import fs from 'fs'
import path from 'path'
import mime from 'mime-types'

const api =  new KoaRouter();

api.get('/scada',
  async (ctx, next) => {
    const data = scadaCache.getCache()
    ctx.body = {
      data: JSON.stringify(data),
    };
  });

api.get('/images',
  async (ctx, next) => {
    console.log('请求图片')
    const good = fs.readFileSync(path.join(__dirname, '../../resource/good.png'), 'base64')
    const broken = fs.readFileSync(path.join(__dirname, '../../resource/broken.png'), 'base64')
    const scratch = fs.readFileSync(path.join(__dirname, '../../resource/scratch.png'), 'base64')
    const fractures = fs.readFileSync(path.join(__dirname, '../../resource/fractures.png'), 'base64')
    ctx.body = {
      good, 
      broken,
      scratch,
      cracks: fractures
    };
    ctx.status = 200;
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