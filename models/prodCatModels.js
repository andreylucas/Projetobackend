import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../connection.js';
import Product from './Product.js';
import Category from './Category.js';

class ProductCategory extends Model { }

ProductCategory.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: 'id',
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'ProductCategory',
  }
);

Product.belongsToMany(Category, {
  through: ProductCategory,
  foreignKey: 'product_id',
});

Category.belongsToMany(Product, {
  through: ProductCategory,
  foreignKey: 'category_id',
});

export default ProductCategory;