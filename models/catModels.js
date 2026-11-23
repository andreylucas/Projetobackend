import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../connection.js';


class Categories extends Model { }

Categories.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
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
   
  },
  {
    sequelize,
    modelName: 'Cat'
  },
);



export default Categories