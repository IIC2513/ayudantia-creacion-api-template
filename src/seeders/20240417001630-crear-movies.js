'use strict';
const faker  = require('@faker-js/faker');
const currentDate = new Date();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const directors = await queryInterface.sequelize.query(
      'SELECT id FROM "Directors";'
    );

    const moviesData = [];
    for (let i = 1; i < 20; i++) {
      moviesData.push({
        title: faker.lorem.words(3),
        genre: faker.random.word(),
        description: faker.lorem.sentence(),
        rating: faker.random.number({ min: 1, max: 10 }),
        directorId: faker.random.number({ min: 1, max: directors[0].length - 1 }) ,
        createdAt: currentDate,
        updatedAt: currentDate
      });
    }
    await queryInterface.bulkInsert('Movies', moviesData, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {});
  }
};
