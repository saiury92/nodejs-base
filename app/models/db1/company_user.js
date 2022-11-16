'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CompanyUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Company);
    }
  }
  CompanyUser.init({
    company_id: DataTypes.INTEGER,
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deleted_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'CompanyUser',
  });
  return CompanyUser;
};
