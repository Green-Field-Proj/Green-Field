const express = require("express");
const userRouter = require("./routers/UserRouter");
require("dotenv").config();
require("./config");
require("./models");

const cors = require("cors");
const Router = require("./routers");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", Router);
app.use("/api/user", userRouter);
// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
