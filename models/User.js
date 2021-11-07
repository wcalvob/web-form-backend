const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = Schema(
  {
    name: String,
    country: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", UserSchema);
