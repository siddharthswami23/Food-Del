const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.json({ success: false, message: "Not Authorized Login Again" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userid = decode.userId; // make sure you use 'userid' consistently
    next();
  } catch (error) {
    console.log("Token verification failed:", error);
    return res.json({ success: false, message: "Token verification failed" });
  }
};

module.exports = authMiddleware;
