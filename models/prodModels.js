import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../connection.js';


class Products extends Model {}

Products.init(

  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
       slug: {
      type: DataTypes.STRING,
      allowNull: false
    },
       use_in_menu: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
         description: {
      type: DataTypes.STRING,
      allowNull: true
     },
     price: {
        type: DataTypes.FLOAT,
      allowNull: false
     },
     price_with_discount: {
        type: DataTypes.FLOAT,
      allowNull: false
     }
    },
  {
    sequelize,
    modelName: 'Prod'
  },
);



export default Products