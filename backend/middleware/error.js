

const ErrorHandler = require("../utlis/ErrorHandler");

const errorMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  res.status(err.statusCode).json({
    success: false,
    message: err.message, // ✅ send JSON message to frontend
  });
};

module.exports = errorMiddleware;
