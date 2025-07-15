


const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((data) => {
    console.log(`✅ MongoDB connected with server: ${data.connection.host}`);
  })
  .catch((err) => {
    console.log("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });
};

module.exports = connectDatabase;
