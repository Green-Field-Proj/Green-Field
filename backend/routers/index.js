const express = require("express");
const Router = express.Router();
const authenticate = require("../middleware");
const {} = require("../controllers");
Router.post("/signup", userSignup);

module.exports = Router;
