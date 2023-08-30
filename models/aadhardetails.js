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
      this.belongsTo(users, {foreignKey : 'aadhar_id'})
    }
  }
  aadhardetails.init({
    aadhar_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    aadharNumber: {
      type:  DataTypes.BIGINT,
      allowNull: false,
      
    },
  }, {
    sequelize,
    modelName: 'aadhardetails',
  });
  return aadhardetails;
};
