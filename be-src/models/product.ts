import { Model, DataTypes } from "sequelize";
import { sequelize } from "./db";

export class Product extends Model {}
Product.init(
  {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: "product",
  }
);
