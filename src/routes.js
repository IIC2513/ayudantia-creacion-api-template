const Router = require('koa-router');
const movies = require('./routes/movies');

const router = new Router();

router.use('/movies', movies.routes());

router.get('/', async (ctx) => {
    ctx.body = 'Hello, world!';
  });
  
module.exports = router;
