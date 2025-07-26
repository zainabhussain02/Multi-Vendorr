const express = require("express");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Shop = require("../model/shop");
const ErrorHandler = require("../utlis/ErrorHandler");
const router = express.Router();
const { isSeller } = require("../middleware/auth");
const CoupounCode = require("../model/coupounCode");
//create coupoun code
router.post(
  "/create-coupoun-code",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const iscoupounCodeExists = await CoupounCode.find({
        name: req.body.name,
      });
      if (iscoupounCodeExists) {
        return next(new ErrorHandler("Coupoun code already exists", 400));
      }
      const coupounCode = await CoupounCode.create(req.body);

      res.status(201).json({
        success: true,
        coupounCode,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);
