'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      Movie.belongsTo(models.Director, {
        foreignKey: 'directorId',
        as: 'director'
      });
      Movie.belongsToMany(models.Actor, { through: 'ActIn', foreignKey: 'movieId' });
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    directorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};