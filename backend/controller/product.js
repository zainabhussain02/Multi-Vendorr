// controller/product.js
const express = require("express");
const router = express.Router();
const Product = require("../model/product");

// Get Single Product by ID
router.get("/get-product/:id", async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({ success: true, product });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
