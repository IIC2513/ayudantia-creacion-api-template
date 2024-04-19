const Router = require('koa-router');
const router = new Router();
const { Movie } = require('../models');

router.get('/', async (ctx) => {
  try {
    const movies = await Movie.findAll();
    ctx.status = 200;
    ctx.body = movies;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Ocurrió un error al buscar las películas' };
  }
});

router.post('/', async (ctx) => {
  try {
    const movie = await Movie.create(ctx.request.body);
    ctx.status = 201;
    ctx.body = movie;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Ocurrió un error al crear la película' };
  }
}
);

router.get('/:id', async (ctx) => {
  try {
    const movie = await Movie.findByPk(ctx.params.id);
    if (movie) {
      ctx.status = 200;
      ctx.body = movie;
    } else {
      ctx.status = 404;
      ctx.body = { error: 'Película no encontrada' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Ocurrió un error al buscar la película' };
  }
});

router.put('/:id', async (ctx) => {
  try {
    await Movie.update(ctx.request.body, {
      where: { id: ctx.params.id },
    });

    const updatedMovie = await Movie.findByPk(ctx.params.id);

    if (!updatedMovie) {
      ctx.status = 404;
      ctx.body = { error: 'Película no encontrada' };
      return;
    }

    ctx.status = 200;
    ctx.body = updatedMovie;
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Ocurrió un error al actualizar la película' };
  }
});

router.delete('/:id', async (ctx) => {
  try {
    const movie = await Movie.findByPk(ctx.params.id);

    if (movie) {
      await movie.destroy();
      ctx.status = 204;
    } else {
      ctx.status = 404;
      ctx.body = { error: 'Película no encontrada' };
    }
  } catch (error) {
    console.log(error);
    ctx.status = 500;
    ctx.body = { error: 'Ocurrió un error al eliminar la película' };
  }
});

module.exports = router;
