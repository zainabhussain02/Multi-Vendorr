const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String, // store image URL or filename
});

module.exports = mongoose.model("Product", productSchema);
