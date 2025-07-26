// controller/product.js
const express = require("express");
const router = express.Router();
const Product = require("../model/product");
const Shop = require("../model/shop");
const upload = require("../multer");
const { isSeller } = require("../middleware/auth");
const fs = require("fs");

const ErrorHandler = require("../utlis/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// ceate product
router.post(
  "/create-product",
  upload.array("images"),
  catchAsyncErrors(async (req, res, next) => {
    try {
      const shopId = req.body.shopId;
      const shop = await Shop.findById(shopId);
      if (!shop) {
        return next(new ErrorHandler("Shop id is invalis", 400));
      } else {
        const files = req.files;
        const imageUrls = files.map((file) => `${file.filename}`);
        const productData = req.body;
        productData.images = imageUrls;
        productData.shop = shop;

        const product = await Product.create(productData);
        res.status(201).json({
          success: true,
          product,
        });
      }
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);
// get all products  o a shop

router.get(
  "/get-all-products-shop/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const products = await Product.find({ shopId: req.params.id });
      res.status(201).json({
        success: true,
        products,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

//delete product of a shop
router.delete(
  "/delete-shop-product/:id",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const productId = req.params.id;

      const productData = await Product.findById(productId);
     productData.images.forEach((imageUrl)=>{
        const filename=imageUrl;
        const filePath=`uploads/${filename}`;
        fs.unlink(filePath,(err)=>{
          if(err){
            console.log(err);
          }
        });
      });
       const product = await Product.findByIdAndDelete(productId);
   
      if (!product) {
        return next(new ErrorHandler("Product not found with this id:!", 500));
      }
      res.status(201).json({
        success: true,
        message:"product deleted successfully!!",
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);
module.exports = router;
