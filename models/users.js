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
    static associate( { aadhardetails, address, roles} ) {
      // define association here
      this.hasOne(aadhardetails, {foreignKey : 'aadhar_id'})
      this.hasMany(address, {foreignKey : 'id'})
      users.belongsToMany(roles, {through:'userRoles'})
    }
  }
  users.init({

    id:{
      allowNull: false,
      primaryKey: true,
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },

    name:{
      type:  DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{'msg': 'User must have a name'},
        notEmpty:{'msg': 'Name field not be empty'}
      }
    },
    number:{
      type:  DataTypes.BIGINT,
      allowNull: false,
      validate:{
        notNull:{'msg': 'User must have a number'},
        notEmpty:{'msg': 'Number field not be empty'},

      }
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{'msg': 'User must have a email'},
        notEmpty:{'msg': 'Email field not be empty'},
        isEmail:{'msg': 'Give a proper mail-id'}
      }
    },
    aadhar_id:{
      type:  DataTypes.UUID,
    },
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};