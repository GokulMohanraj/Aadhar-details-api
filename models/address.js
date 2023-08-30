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
    static associate({ users }) {
      // define association here
      this.belongsTo(users, {foreignKey : 'userid'})
    }
    }
  
  address.init({
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
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
      allowNull: true}
  }, {
    sequelize,
    modelName: 'address',
  });
  return address;
};