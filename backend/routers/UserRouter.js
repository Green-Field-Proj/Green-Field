const express = require("express");
const UserRouter = express.Router();
const authenticate = require("../middleware");
const { userLogin, userSignup } = require("../controllers/UserController");

UserRouter.post("/register", userSignup);
UserRouter.post("/login", userLogin);

module.exports = UserRouter;
