const Koa = require('koa');
const Router = require('koa-router');
const KoaBody = require('koa-body');
const { Schedule } = require('./schedule');

const app = new Koa();
const router = new Router({
  prefix: '/api/v1',
});
app.use(KoaBody());
app
  .use(router.routes())
  .use(router.allowedMethods());


router.post('/schedule', (ctx, next) => {
  const { code } = ctx.request.body;
  const func = new Function('Schedule', code);
  func(Schedule);
});

app.listen(8001);
