import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../connection.js';
import Products from './prodModels.js';

class ProductImage extends Model { }

ProductImage.init(
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
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'ProductImage',
  }
);

ProductImage.belongsTo(Products, { foreignKey: 'product_id' });
Products.hasMany(ProductImage, { foreignKey: 'product_id' });

export default ProductImage;