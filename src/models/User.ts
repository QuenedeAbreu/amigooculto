import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';


interface UserInstace extends Model {
  id: number;
  name: string;
  age: number;
  email?: string;
};

export const User = sequelize.define<UserInstace>('user', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
  },
  age: {
    type: DataTypes.INTEGER,
    defaultValue: 18,
  },
  email: {
    type: DataTypes.STRING,
  }
}, {
  tableName: 'users',
  timestamps: false,
}); 
