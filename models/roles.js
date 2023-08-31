'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      roles.belongsToMany(models.users, {through:'userroles'})
    }
  }
  roles.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    roleName: {
    type:DataTypes.STRING,
    allowNull: false}
  }, {
    sequelize,
    modelName: 'roles',
  });
  return roles;
};