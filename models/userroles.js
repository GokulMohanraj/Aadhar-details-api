'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userRoles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userRoles.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    roleId: {
      type:DataTypes.UUID,
      allowNull: false
    },
    userId: {
      type:DataTypes.UUID,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'userRoles',
  });
  return userRoles;
};