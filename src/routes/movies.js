const Router = require('koa-router');
const router = new Router();
const { Movie } = require('../models');

router.get('/', async (ctx) => {
  try {
    const movies = await Movie.findAll();
    ctx.status = 200;
    ctx.body = movies;
  } catch (error) {
    console.log(error);
    ctx.throw(400);
  }
});

module.exports = router;
