import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../connection.js';
import bcrypt from 'bcrypt';

class User extends Model { }

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: 'User'
  },
);

User.beforeCreate(async (user)=>{
  const newPassword = await bcrypt.hash(user.password, 10);
  user.password = newPassword;
})

export default User