// const express = require("express");
// const ErrorHandler = require("./middleware/error");
// const app = express();
// const cookieParser = require("cookie-parser");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// // app.use(cors());
// app.use(cors({ origin: "http://localhost:3000", credentials: true }));
// app.use(express.json());
// app.use(cookieParser());
// // app.use("/",express.static("upload"))
// app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// // Config (fixed dotenv typo)
// if (process.env.NODE_ENV !== "PRODUCTION") {
//   require("dotenv").config({
//     path: "config/.env",
//   });
// }

// //routes
// const user = require("./controller/user");
// app.use("/api/v2/user", user);
// // Error handling middleware
// app.use(ErrorHandler);

// module.exports = app;



const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

// Enable CORS for frontend
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

// Routes
const user = require("./controller/user");
app.use("/api/v2/user", user);

const payment = require("./controller/payment.js"); // ✅ Added
app.use("/api/v2/payment", payment);            // ✅ Added

// Error Handler
app.use(ErrorHandler);

module.exports = app;
