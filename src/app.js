const Koa = require('koa');
const KoaLogger = require('koa-logger');
const { koaBody } = require('koa-body');
const router = require('./routes.js');

const app = new Koa();

app.use(KoaLogger());
app.use(koaBody());

app.use(router.routes());

module.exports = app;

