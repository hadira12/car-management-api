"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Superadmin extends Model {
    static associate(models) {}
  }
  Superadmin.init(
    {
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Superadmin",
    }
  );
  return Superadmin;
};
