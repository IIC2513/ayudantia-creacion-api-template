const Router = require('koa-router');
const router = new Router();
const { Actor } = require('../models');
const getAllActorMoviesById = require('../controllers/getAllActorMoviesById');

router.get('/:id/movies', async (ctx) => {
  try {
    const movies = await getAllActorMoviesById(ctx.params.id);
    ctx.status = 200;
    ctx.body = movies;
  } catch (error) {
    if (error.message === 'Actor not found') {
      ctx.status = 404;
      ctx.body = { error: 'Actor not found' };
    } else {
      ctx.status = 500;
      ctx.body = { error: 'Ocurrió un error al buscar las películas del actor' };
    }
  }
});

module.exports = router;
