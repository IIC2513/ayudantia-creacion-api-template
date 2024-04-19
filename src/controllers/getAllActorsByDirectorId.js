const { ActIn, Movie, Actor } = require('../models');

const getAllActorsByDirectorId = async (directorId) => {
  try {
    const movies = await Movie.findAll({
      where: {
        directorId,
      },
    });
    const movieIds = movies.map(movie => movie.id);
    
    const actIns = await ActIn.findAll({
      where: {
        movieId: movieIds,
      },
    });

    const actorIds = actIns.map(actIn => actIn.actorId);

    const actors = await Actor.findAll({
      where: {
        id: actorIds,
      },
    });

    return actors;
  } catch (error) {
    console.error('Error al obtener actores por ID de director:', error);
    throw error;
  }
};

module.exports = getAllActorsByDirectorId;
