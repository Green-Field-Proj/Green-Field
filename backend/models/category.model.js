
const { DataTypes } = require('sequelize');
const sequelize = require('../config/index');

const Category = sequelize.define('Category', {
  name: { type: DataTypes.STRING, allowNull: false },
});

module.exports = Category;

