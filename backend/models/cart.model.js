
const { DataTypes } = require('sequelize');
const sequelize = require('../config/index');


const Cart = sequelize.define('Cart', {
  quantity: { type: DataTypes.INTEGER, defaultValue: 1 },
});

// Cart.belongsTo(User, { as: 'client', foreignKey: 'userId' });
// Cart.belongsTo(Product, { as: 'product', foreignKey: 'productId' });

module.exports = Cart;

