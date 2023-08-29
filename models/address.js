'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  address.init({
    uuid:{
       type: DataTypes.UUID,
       defaultValue: DataTypes.UUIDV4},
    name: {
      type:  DataTypes.STRING,
      allowNull: false
    },
    street: {
      type:  DataTypes.STRING,
      allowNull: false,
    },
    city:{
      type:  DataTypes.STRING,
      allowNull: false,
    },
    country:{
      type:  DataTypes.STRING,
      allowNull: false
    },
    userid: {
      type:DataTypes.UUID,
      allowNull: false}
  }, {
    sequelize,
    modelName: 'address',
  });
  return address;
};