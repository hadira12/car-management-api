"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Car extends Model {
    static associate(models) {}
  }
  Car.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      deleted: DataTypes.BOOLEAN,
      created_by: DataTypes.STRING,
      updated_by: DataTypes.STRING,
      deleted_by: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Car",
    }
  );
  return Car;
};
