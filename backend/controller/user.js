const User = require("../model/user");
const express = require("express");
const path = require("path");
const router = express.Router();
const upload = require("../multer");
const ErrorHandler = require("../utlis/ErrorHandler");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../utlis/sendMail");

router.post("/create-user", upload.single("file"), async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const userEmail = await User.findOne({ email });

    if (userEmail) {
      const filename = req.file.filename;
      const filePath = `uploads/${filename}`;
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error("Error deleting file:", err);
          res.status(500).json({ error: "Failed to delete file" });
        } else {
          res.status(200).json({ message: "File deleted successfully" });
          console.log("File deleted successfully");
        }
      });

      return next(new ErrorHandler("User already exists", 400));
    }

    const filename = req.file.filename;
    const fileUrl = path.join(filename);
    const user = {
      name: name,
      email: email,
      password: password,
      fileUrl,
      avatar: fileUrl,
    };
    const activationToken = createActivationToken(user);
const activationUrl = `http://localhost:3000/user/activate/${activationToken}`;
  try {
    await sendMail({
      email: user.email,
      subject: "  Activate your account",
      message: `Hello ${user.name},\n\nPlease click on the link below to activate your account:\n\n${activationUrl}\n\nThank you!`,
    })
res.status(201).json({
  success: true,
  message:`please check your email :-${user.message,500} to activate your account `
})
  } catch (error) {
    console.error("Error creating user:", error);
    return next(new ErrorHandler("Failed to create user", 500));
  }


// You can continue with your logic here
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});

//create activation token function
const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
}

//activate user 


module.exports = router;
