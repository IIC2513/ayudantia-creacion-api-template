'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Director extends Model {
    static associate(models) {
        Director.hasMany(models.Movie, {
            foreignKey: 'directorId', // Nombre de la columna que contendrá la clave foránea en la tabla Movie
            as: 'movies' // Alias para la relación
          });
    }
  }
  Director.init({
    name: DataTypes.STRING,
    nacionality: DataTypes.STRING,
    ctdAwards: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Director',
  });
  return Director;
};