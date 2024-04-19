'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ActIn extends Model {
    static associate(models) {
      // Define las asociaciones con los modelos Movie y Actor
      ActIn.belongsTo(models.Movie, { foreignKey: 'movieId' });
      ActIn.belongsTo(models.Actor, { foreignKey: 'actorId' });
    }
  }
  ActIn.init({}, {
    sequelize,
    modelName: 'ActIn',
  });
  return ActIn;
};