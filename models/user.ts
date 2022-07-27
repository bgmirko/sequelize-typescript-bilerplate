'use strict';
import {
  Model
} from 'sequelize';

interface UserAttributes {
  id: number;
  name: string;
  email: string;
  password: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id: number;
    name: string;
    email: string;
    password: string;
    static associate(models: any) {
      // define association here
      User.belongsToMany(models.Project, {
        through: 'ProjectAssignments'
      })
      User.hasMany(models.Like, {
        foreignKey: 'like_from'
      })
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};