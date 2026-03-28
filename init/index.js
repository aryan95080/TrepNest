const mongoose = require("mongoose");
const TripNest = require("../models/tripnest.js");
const initData= require("./data.js");

const MONGO_URI = "mongodb://127.0.0.1:27017/tripnest";

main()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

async function main() {
  await mongoose.connect(MONGO_URI);
}

const initDB = async () => {
  await TripNest.deleteMany({});
  initData.data=initData.data.map((ele)=>({...ele,owner:"69a9d063f95297169d851d7f"}))
  await TripNest.insertMany(initData.data);
  console.log("Database initialized with sample data");
};

initDB();