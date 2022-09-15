const jwt = require("jsonwebtoken");

const checkRoleMiddleware = (role) => {
  return (req, res, next) => {
    if (req.method === "OPTIONS") {
      next();
    }
    try {
      const token = req.headers.authorization.split(" ")[1]; // Bearer asfasnfkajsfnjk
      if (!token) {
        return res.status(401).json({ message: "User is not authorized!" });
      }
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      if (decoded.role !== role) {
        return res.status(403).json({ message: "User have not permission for this action!" });
      }
      req.user = decoded;
      next();
    } catch (e) {
      res.status(401).json({ message: "User is not authorized!" });
    }
  };
};

module.exports = checkRoleMiddleware;
