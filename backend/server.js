const path = require("path");
const express = require("express");
require("dotenv").config({ path: "backend/config/.env" });

const app = require("./app");
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
const connectDatabase = require("./db/Database");

// Handling uncaught exceptions
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server due to uncaught exception");
  process.exit(1);
});

// Connect to the database
connectDatabase();

// Start server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.log(`Shutting down the server for ${err.message}`);
  console.log("Shutting down the server for unhandled promise rejection");
  server.close(() => {
    process.exit(1);
  });
});
