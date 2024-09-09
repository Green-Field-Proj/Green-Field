const sequelize = require("../config/index.js");
const { DataTypes } = require("sequelize");

const User = require("./user.model");
const Product = require("./product.model");
const Review = require("./review.model");
const Order = require("./order.model");
const Category = require("./category.model");
const Cart = require("./cart.model");

//  associations
// User <--> Review
User.hasMany(Review, { as: "reviews", foreignKey: "userId" });
Review.belongsTo(User, { as: "user", foreignKey: "userId" });

// Product <--> Review
Product.hasMany(Review, { as: "reviews", foreignKey: "productId" });
Review.belongsTo(Product, { as: "product", foreignKey: "productId" });

// Product <--> Category
Product.belongsTo(Category, { as: "category", foreignKey: "categoryId" });
Category.hasMany(Product, { as: "products", foreignKey: "categoryId" });

// User <--> Order
User.hasMany(Order, { as: "orders", foreignKey: "userId" });
Order.belongsTo(User, { as: "client", foreignKey: "userId" });

// Order <--> Product (Many-to-Many)
Order.belongsToMany(Product, {
  through: "OrderProducts",
  as: "products",
  foreignKey: "orderId",
});
Product.belongsToMany(Order, {
  through: "OrderProducts",
  as: "orders",
  foreignKey: "productId",
});

// User <--> Cart
User.hasMany(Cart, { as: "carts", foreignKey: "userId" });
Cart.belongsTo(User, { as: "client", foreignKey: "userId" });

// Product <--> Cart
Product.hasMany(Cart, { as: "carts", foreignKey: "productId" });
Cart.belongsTo(Product, { as: "product", foreignKey: "productId" });

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     console.log("All models were synchronized successfully.");
//   })
//   .catch((error) => {
//     console.error("Error synchronizing models:", error);
//   });

module.exports = {
  User,
  Product,
  Review,
  Order,
  Category,
  Cart,
  sequelize,
};
