const express = require("express");
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

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
