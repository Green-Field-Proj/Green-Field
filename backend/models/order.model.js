
const { DataTypes } = require('sequelize');
const sequelize = require('../config/index');


const Order = sequelize.define('Order', {
  totalPrice: { type: DataTypes.DECIMAL, allowNull: false },
  paymentStatus: { type: DataTypes.ENUM('pending', 'completed', 'failed'), defaultValue: 'pending' },
});

// Order.belongsTo(User, { as: 'client', foreignKey: 'userId' });
// Order.belongsToMany(Product, { through: 'OrderProducts', as: 'products', foreignKey: 'orderId' });
// Product.belongsToMany(Order, { through: 'OrderProducts', as: 'orders', foreignKey: 'productId' });

module.exports = Order;

