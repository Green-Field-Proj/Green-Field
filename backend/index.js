const express = require("express");
const cookieParser = require("cookie-parser");
const userRouter = require("./routers/UserRouter");
const ProductsRouter = require("./routers/ProductsRoutes");
const orderRoutes = require("./routers/orderRoutes");
const reviewRoutes = require("./routers/reviewRouter");
const cartRoutes = require("./routers/cartRouter");
require("dotenv").config();
require("./config");
require("./models");

const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use("/api", ProductsRouter);
app.use("/api/user", userRouter);
app.use("/api/orders", orderRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/cart", cartRoutes);
// Start server
app.listen(port, () => {
  console.log(`Server running on port  http://localhost:${port}`);
});
