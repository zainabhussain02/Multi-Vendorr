const ErrorHandler = require('../utlis/ErrorHandler');  
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //wrong mongosb id error
  if (err.name === "CastError") {    
    const message = `Resource not found with this ID. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);  
  } 

  //duplicate key error
  if (err.code === 11000) { 
    const message = `Duplicate  key ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  //wrong jwt error
    if (err.name === "JsonWebTokenError") {
        const message = `Json Web Token is invalid, try again`;
        err = new ErrorHandler(message, 400);
    }

    //jwt expired error
if(err.name=="TokenExpiredError"){
    const message = `Json Web Token is expired, try again later`; 
  err = new ErrorHandler(message, 400);
}
res.status(err.statusCode).json({
    success: false, 
    message: err.message,
})
}
//   // Log the error for debugging
//   console.error(err.stack);

//   // Create a custom error message
//   const errorMessage = {
//     success: false,
//     message: err.message,
//     statusCode: err.statusCode,
//   };

//   // Send the error response
//   res.status(err.statusCode).json(errorMessage);
// }