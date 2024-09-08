// Import the Sequelize library
const { Sequelize } = require("sequelize");

// Load environment variables from .env file
require("dotenv").config();

// Create a new Sequelize instance for database connection
const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Database user
  process.env.DB_PASSWORD, // Database password
  {
    host: process.env.DB_HOST, // Database host
    dialect: "mysql", // we will use mysql
  }
);

// Function to test the database connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

testConnection();

module.exports = sequelize;
