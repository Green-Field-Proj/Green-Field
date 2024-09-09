const express = require("express");
const UserRouter = express.Router();
const authenticate = require("../middleware");
const { userLogin, userRegister } = require("../controllers/UserController");

UserRouter.post("/register", userRegister);
UserRouter.post("/login", userLogin);

module.exports = UserRouter;
