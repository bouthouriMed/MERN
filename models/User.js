const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // register_date: {
  //   type: Date,
  //   default: Date.now,
  // },
});

module.exports = User = mongoose.model("User", UserSchema);
