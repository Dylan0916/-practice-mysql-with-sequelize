'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      titleYear: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      directorName: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      actor1Name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      actor2Name: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      duration: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING(50),
        allowNull: false,
      },
      contentRating: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      gross: {
        type: Sequelize.BIGINT,
        allowNull: false,
      },
      imdbScore: {
        type: Sequelize.FLOAT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Movies');
  },
};
