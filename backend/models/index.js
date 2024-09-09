const sequelize = require("../config/");
// Import you Models Here And define your asso
const User = require("./UserModel");
const products = require("./products");

// sequelize.sync({ force: true }).then(() => {
//     console.log("All models were synchronized successfully.");
//   })
//   .catch((error) => {
//     console.error("Error synchronizing models:", error);
//   });
