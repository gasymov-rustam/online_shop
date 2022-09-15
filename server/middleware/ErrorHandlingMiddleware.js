const ApiError = require("../error");

const errorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }

  return res.status(500).json({ message: "Unknown mistake!" });
};

module.exports = errorHandler;
