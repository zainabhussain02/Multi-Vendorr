// const mongoose = require("mongoose");

// const coupounCodeSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: [true, "Please enter your cupoun codeproduct name!"],
//     unique: true,
//   },
//   value: {
//     type: Number,
//     required: true,
//   },
//   minAmount: {
//     type: Number,
//   },
//   mxAmount: {
//     type: Number,
//   },
//   shop: {
//     type: Object,
//     required: true,
//   },
// selectedProduct:{
// type:String,
// },
//   createdAt: {
//     type: Date,
//     default: Date.now(),
//   },
// });

// module.exports = mongoose.model("coupounCodeSchema", coupounCodeSchema);


const mongoose = require("mongoose");

const coupounCodeSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true,"Please enter your coupoun code name!"],
        unique: true,
    },
    value:{
        type: Number,
        required: true,
    },
    minAmount:{
        type: Number,
    },
    maxAmount:{
        type: Number,
    },
    shopId:{
     type: String,
     required: true,
    },
//     selectedProducts: {
//   type: String,
//   // required: true,
// },
selectedProduct: {
  type: String,
  // ref: "Product",
  
},


    createdAt:{
        type: Date,
        default: Date.now(),
    }
});

module.exports = mongoose.model("CoupounCode", coupounCodeSchema);