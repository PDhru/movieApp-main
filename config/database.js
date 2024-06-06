const mongoose = require("mongoose");

const db = async () => {
  await mongoose.connect('mongodb+srv://dhrutip2005:dhruti16@cluster0.otquczc.mongodb.net/movies');
  console.log("Database connected.");
};

module.exports = db;
