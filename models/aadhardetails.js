'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aadhardetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ users }) {
      // define association here
      this.belongsTo(users, { foreignKey:'aadhardetails.id' })
    }
  }
  aadhardetails.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.UUID
    },
    name: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    aadharNumber: {
      type:  DataTypes.BIGINT,
      allowNull: false,
      validate:{
        min:{12:'Number should be 12 digit'},
        max:{12:'Number should be 12 digit'}
      }
    },
  }, {
    sequelize,
    modelName: 'aadhardetails',
  });
  return aadhardetails;
};
