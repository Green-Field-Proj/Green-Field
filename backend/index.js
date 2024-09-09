const express = require("express");
const cookieParser = require("cookie-parser");
const userRouter = require("./routers/UserRouter");
require("dotenv").config();
require("./config");
require("./models");

const cors = require("cors");
const ProductsRouter = require("./routers/ProductsRoutes");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser()); // middleware to parse cookies where our token and role is stored
// Routes
app.use("/api", ProductsRouter);
app.use("/api/user", userRouter);
// Start server
app.listen(port, () => {
  console.log(`Server running on port  http://localhost:${port}`);
});
