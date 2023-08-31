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
    static associate() {
      // define association here
     
      
    }
  }
  userRoles.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    roleid: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    },
    userid: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
    }
  }, {
    sequelize,
    modelName: 'userRoles',
    tableName: 'userroles'
  });
  return userRoles;
};