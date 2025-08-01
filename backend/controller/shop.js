const express = require("express");
const path = require("path");
const router = express.Router();
const fs = require("fs");
const jwt = require("jsonwebtoken");
const catchAsyncError = require("../middleware/catchAsyncErrors");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendMail = require("../utlis/sendMail");
const sendToken = require("../utlis/jwtToken");
const { isAuthenticated, isSeller } = require("../middleware/auth");
const ErrorHandler = require("../utlis/ErrorHandler");
const Shop = require("../model/shop");
const upload = require("../multer");
const sendShopToken = require("../utlis/shopToken");

//create shop
router.post("/create-shop", upload.single("file"), async (req, res, next) => {
  try {
    const { email } = req.body;
    const sellerEmail = await Shop.findOne({ email });
    if (sellerEmail) {
      const filename = req.file.filename;
      const filePath = `upload/${filename}`;
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Error deleting files" });
        }
      });
      return next(new ErrorHandler("User already exist", 400));
    }
    const filename = req.file.filename;
    const fileUrl = path.join(filename);
    const seller = {
      name: req.body.name,
      email,
      password: req.body.password,
      avatar: {
        public_id: fileUrl,
        url: fileUrl,
      },

      address: req.body.address,
      phoneNumber: req.body.phoneNumber,
      zipCode: req.body.zipCode,
    };
    const activationToken = createActivationToken(seller);
    const activationUrl = `http://localhost:3000/seller/activation/${activationToken}`;
    try {
      await sendMail({
        email: seller.email,
        subject: "Activate Your shop",
        message: `Hello ${seller.name},\n\t Please click on the link below to activate your shop:\n\n${activationUrl}`,
      });
      res.status(201).json({
        success: true,
        message: `Please check your email:-\n\t${seller.email} to activate your shop`,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

// Create activation Token
const createActivationToken = (seller) => {
  return jwt.sign(seller, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
};

// ✅ Fixed Activation Route
router.post(
  "/activation",
  catchAsyncError(async (req, res, next) => {
    try {
      const { activation_token } = req.body;

      // Decode token
      const newSeller = jwt.verify(
        activation_token,
        process.env.ACTIVATION_SECRET
      );

      if (!newSeller) {
        return next(new ErrorHandler("Invalid token", 400));
      }

      const { name, email, password, avatar, address, zipCode, phoneNumber } =
        newSeller;

      let seller = await Shop.findOne({ email });

      if (seller) {
        return res.status(200).json({
          success: true,
          message: "Account already activated. Please log in.",
        });
      }

      seller = await Shop.create({
        name,
        email,
        password,
        avatar,
        address,
        phoneNumber,
        zipCode,
      });

      sendShopToken(seller, 201, res);
    } catch (error) {
      // Check if token expired
      if (error.name === "TokenExpiredError") {
        return next(new ErrorHandler("Activation token expired", 400));
      }
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

//login to shop
router.post(
  "/login-shop",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return next(new ErrorHandler("Please provide the all fileds", 400));
      }
      const user = await Shop.findOne({ email }).select("password");

      if (!user) {
        return next(new ErrorHandler("user doesn't exists", 400));
      }
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        return next(
          new ErrorHandler("Please provide the correct information", 400)
        );
      }

      sendShopToken(user, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// load shop

router.get(
  "/getSeller",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const seller = await Shop.findById(req.seller._id);

      if (!seller) {
        return next(new ErrorHandler("seller done exist", 400));
      }
      res.status(200).json({
        success: true,
        seller,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

//logout from shop
router.get(
  "/logout",
  // isAuthenticated,
  catchAsyncErrors(async (req, res, next) => {
    try {
      res.cookie("seller_token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
      });
      res.status(201).json({
        success: true,
        message: "Logout successfull",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);

// get shop info

router.get(
  "/get-shop-info/:id",
  catchAsyncErrors(async (req, res, next) => {
    try {
      const shop = await Shop.findById(req.params.id);
      res.status(201).json({
        success: true,
        shop,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  })
);
module.exports = router;
