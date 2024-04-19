'use strict';
const faker  = require('@faker-js/faker');
const currentDate = new Date();

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const directorsData = [];

    // Genera 50 registros de directores
    for (let i = 1; i < 15; i++) {
      directorsData.push({
        name: faker.name.findName(),
        nacionality: faker.address.country(),
        ctdAwards: faker.random.number(20),
        createdAt: currentDate,
        updatedAt: currentDate
      });
    }

    // Inserta los registros en la base de datos
    await queryInterface.bulkInsert('Directors', directorsData);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Directors', null, {});
  }
};
