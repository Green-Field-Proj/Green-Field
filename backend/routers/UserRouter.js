const express = require("express");
const UserRouter = express.Router();
const authenticate = require("../middleware");
const {
        userLogin,
        userSignup,
        getAllUsers, 
        getUserById,
        getUserByName,
        updateUser,      
        deleteUser } = require("../controllers/User.controller");

UserRouter.post("/register", userSignup);
UserRouter.post("/login", userLogin);
UserRouter.get("/getAll", getAllUsers);
UserRouter.get("/byId/:id", getUserById);
UserRouter.get("/byName/:username", getUserByName);
UserRouter.put("/:id", updateUser);
UserRouter.delete("/:id", deleteUser);

module.exports = UserRouter;
