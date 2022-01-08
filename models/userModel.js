const mongo = require("mongoose");
const { Schema } = mongo;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
    default: "user",
  },
  create_date: {
    type: String,
    required: true,
  },
});

const userModel = mongo.model("user", userSchema);

module.exports = userModel;
