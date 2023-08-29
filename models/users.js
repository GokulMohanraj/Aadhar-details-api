'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate( { aadhardetails } ) {
      // define association here
      this.hasOne(aadhardetails, { foreignKey: 'aadhardetails.id' })
    }
  }
  users.init({
    uuid:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4},
    full_name:{
      type:  DataTypes.STRING,
      allowNull: false
    },
    country_code:{
      type:  DataTypes.INTEGER,
      allowNull: false
    },
    aadhar_id:{
      type:  DataTypes.UUID,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};