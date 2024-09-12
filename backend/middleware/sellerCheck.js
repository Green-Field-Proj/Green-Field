const jwt = require("jsonwebtoken");
require("dotenv").config();

// MiddleWare Here we will need auth for now

const sellerCheck = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    if (decoded.role !== "seller") {
      return res.status(403).json({ message: "You are not a seller" });
    }
    next();
  });
};
module.exports = sellerCheck;
