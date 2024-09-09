
const { DataTypes } = require('sequelize');
const sequelize = require('../config/index');


const Review = sequelize.define('Review', {
  rating: { type: DataTypes.INTEGER, allowNull: false },
  comment: { type: DataTypes.TEXT },
});

// Review.belongsTo(User, { as: 'client', foreignKey: 'userId' });
// Review.belongsTo(Product, { as: 'product', foreignKey: 'productId' });

module.exports = Review;

