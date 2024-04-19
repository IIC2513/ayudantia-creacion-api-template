'use strict';
const faker  = require('@faker-js/faker');
const currentDate = new Date();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const actorsData = [];
    for (let i = 0; i < 50; i++) {
      actorsData.push({
        name: faker.name.findName(),
        nacionality: faker.address.country(),
        createdAt: currentDate,
        updatedAt: currentDate
      });
    }
    await queryInterface.bulkInsert('Actors', actorsData, {});

    const actors = await queryInterface.sequelize.query(
      'SELECT id FROM "Actors";'
    );

    const movies = await queryInterface.sequelize.query(
      'SELECT id FROM "Movies";'
    );

    const actInsData = [];
    actors[0].forEach(actor => {
      for (let i = 0; i < 2; i++) {
        actInsData.push({
          actorId: actor.id,
          movieId: faker.random.number({ min: 1, max: movies[0].length - 1 }) ,
          createdAt: currentDate,
          updatedAt: currentDate
        });
      }
    });

    await queryInterface.bulkInsert('ActIns', actInsData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Actors', null, {});
    await queryInterface.bulkDelete('ActIns', null, {});
  }
};
