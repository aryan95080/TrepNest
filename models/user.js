const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// IMPORTANT FIX
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  image: {
    url: String,
    filename: String,
  },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);