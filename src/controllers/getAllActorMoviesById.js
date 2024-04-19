const { ActIn, Movie, Actor } = require('../models');

const getAllActorMoviesById = async (actorId) => {
  try {
    const actor = await Actor.findByPk(actorId);
    if (!actor) {
      throw new Error('Actor not found');
    }

    const actIns = await ActIn.findAll({
      where: {
        actorId,
      },
    });
    const movieIds = actIns.map(actIn => actIn.movieId);

    const movies = await Movie.findAll({
      where: {
        id: movieIds,
      },
    });

    return movies;
  } catch (error) {
    console.error('Error al obtener películas por ID de actor:', error);
    throw error;
  }
};

module.exports = getAllActorMoviesById;
