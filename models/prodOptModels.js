import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../connection.js';
import Products from './prodModels.js';

class ProductOption extends Model { }

ProductOption.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Products,
        key: 'id',
      },
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    shape: {
      type: DataTypes.ENUM('square', 'circle'),
      allowNull: true,
      defaultValue: 'square',
    },
    radius: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    type: {
      type: DataTypes.ENUM('text', 'color'),
      allowNull: true,
      defaultValue: 'text',
    },
    values: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'ProductOption',
  }
);

ProductOption.belongsTo(Products, { foreignKey: 'product_id' });
Products.hasMany(ProductOption, { foreignKey: 'product_id' });

export default ProductOption;