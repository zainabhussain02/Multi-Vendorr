const ErrorHandler=require("../utlis/ErrorHandler");
const catchAsyncErrors = require("./catchAsyncErrors"); 
const jwt=require("jsonwebtoken");

const isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return next(new ErrorHandler("Please login to access this resource", 401));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = decodedData.user;

  next();
});