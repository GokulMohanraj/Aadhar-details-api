'use strict';

const { DataTypes, UUIDV4 } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      street: {
        allowNull: false,
        type: DataTypes.STRING
      },
      city: {
        allowNull: false,
        type: DataTypes.STRING
      },
      country: {
        allowNull: false,
        type: DataTypes.STRING
      },
      userid: {
        allowNull: false,
        type: DataTypes.UUID
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('addresses');
  }
};