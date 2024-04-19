const Router = require('koa-router');
const router = new Router();
const { Director } = require('../models');
const getAllActorsByDirectorId = require('../controllers/getAllActorsByDirectorId');

router.get('/', async (ctx) => {
  try {
    const directors = await Director.findAll();
    ctx.body = directors;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Ocurrió un error al buscar los directores' };
  }
});

router.get('/:id/actors', async (ctx) => {
  try {
    const actors = await getAllActorsByDirectorId(ctx.params.id);
    ctx.status = 200;
    ctx.body = actors;
  } catch (error) {
    if (error.message === 'Director not found') {
      ctx.status = 404;
      ctx.body = { error: 'Director not found' };
    } else {
      ctx.status = 500;
      ctx.body = { error: 'Ocurrió un error al buscar los actores' };
    }
  }
});

module.exports = router;
