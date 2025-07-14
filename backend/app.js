const express = require('express');
const app = express();    
const ErrorHandler = require("./utlis/ErrorHandler");  
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const cors=require("cors");

app.use(express.json());
app.use(cookieParser()); 
app.use(cors());
app.use("/",express.static("uploads")); // Serve static files from the "uploads" directory
app.use(bodyParser.urlencoded({ extended: true }));


//config
if (process.env.NODE_ENV !== "PRODUCTION") {
    require('dotenv').config();
    path:"backend/config/.env";
}

//import routes
const user= require("./controller/user");
app.use("/api/v2/user", user);
//its for error handling
app.use(ErrorHandler);


module.exports = app;   