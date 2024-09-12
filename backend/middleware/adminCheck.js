const jwt = require("jsonwebtoken");
require("dotenv").config();

// MiddleWare Here we will need auth for now

const adminCheck = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Forbidden" });
    }
    next();
  });
};
module.exports = adminCheck;
