const express = require("express");
const UserRouter = express.Router();
const authenticate = require("../middleware");
const upload = require("../middleware/multer");
const adminAuth = require("../middleware/adminCheck");

const {
  userLogin,
  userSignup,
  getAllUsers,
  getUserById,
  getUserByName,
  updateUser,
  checkStatus,
  userLogout,
  adminDeleteUser,
  adminupdateuser,
} = require("../controllers/User.controller");

UserRouter.post("/logout", userLogout);
UserRouter.post("/register", upload.single("imageFile"), userSignup);
UserRouter.post("/login", userLogin);
UserRouter.get("/check", authenticate, checkStatus);
UserRouter.get("/getAll", getAllUsers);
UserRouter.get("/byId/:id", getUserById);
UserRouter.get("/byName/:username", getUserByName);
UserRouter.put("/update", authenticate, updateUser);
UserRouter.put("/adminupdateuser/:id", adminAuth, adminupdateuser);
UserRouter.delete("/delete/:id", adminAuth, adminDeleteUser);

module.exports = UserRouter;
