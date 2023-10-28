const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
  // Log the MONGO_URL environment variable
  console.log("MONGO_URI", process.env.MONGO_URI);

  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB Database ${mongoose.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.log(`Mongoose Database Error ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
