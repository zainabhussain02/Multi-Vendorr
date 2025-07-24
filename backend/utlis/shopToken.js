// //create token and saving that in cookies
// const sendShopToken = (user, statusCode, res) => {
//     const token = user.getJwtToken();

//     //Option for cookies
//     const options = {
//       expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
//       httpOnly: true,
//     };

//     res.status(statusCode).cookie("seller_token", token, options).json({
//       success: true,
//       user,
//       token,
//     });
//   };

//   module.exports=sendShopToken;

const sendShopToken = (user, statusCode, res) => {
  const token = user.getJwtToken();

  // Option for cookies
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: true,
    sameSite: "None", // optional, for CORS safety
  };

  // 🔒 Don't expose password in response
  user.password = undefined;

  // ✅ Return as "seller" instead of "user"
  res.status(statusCode).cookie("seller_token", token, options).json({
    success: true,
    seller: user, // <-- this is what frontend expects
    token,
  });
};

module.exports = sendShopToken;
