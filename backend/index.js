const express = require("express");
const cookieParser = require("cookie-parser");

const userRouter = require("./routers/UserRouter");
const ProductsRouter = require("./routers/ProductRouter");
const orderRouter = require("./routers/orderRouter");
const reviewRouter = require("./routers/reviewRouter");
const cartRouter = require("./routers/cartRouter");
const categoryRouter = require("./routers/categoryRouter");

require("dotenv").config();
require("./config");
require("./models");

const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/product", ProductsRouter);
app.use("/api/user", userRouter);
app.use("/api/order", orderRouter);
app.use("/api/review", reviewRouter);
app.use("/api/cart", cartRouter);
app.use("/api/category", categoryRouter);

// Start server
app.listen(port, () => {
  console.log(`Server running on port  http://localhost:${port}`);
});
