const { ActIn, Movie } = require('../models');

const getAllActorMoviesById = async (actorId) => {
  try {
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
}

module.exports = getAllActorMoviesById;
