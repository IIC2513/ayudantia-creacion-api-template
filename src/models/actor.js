'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    static associate(models) {
      Actor.belongsToMany(models.Movie, { through: 'ActIn', foreignKey: 'actorId' });
    }
  }
  Actor.init({
    name: DataTypes.STRING,
    nacionality: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Actor',
  });
  return Actor;
};