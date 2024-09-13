const { DataTypes } = require("sequelize");
const sequelize = require("../config/index");

const Product = sequelize.define("Product", {
  name: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT, allowNull: false },
  price: { type: DataTypes.DECIMAL, allowNull: false },
  stock: { type: DataTypes.INTEGER, allowNull: false },
  imageUrl: { type: DataTypes.STRING }, // lien Cloudinary ba3d
  discount: {
    type: DataTypes.FLOAT,
    allowNull: true,
    defaultValue: 0,
  },
});

// Product.belongsTo(User, { as: 'seller', foreignKey: 'userId' });

module.exports = Product;
