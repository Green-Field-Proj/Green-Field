
const { DataTypes } = require('sequelize');
const sequelize = require('../config/index');

const User = sequelize.define('User', {
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.ENUM('admin', 'client', 'seller'), allowNull: false },
  profileImage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = User;

