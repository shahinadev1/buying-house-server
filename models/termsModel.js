const mongo = require("mongoose");
const { Schema } = mongo;
const termsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  added_date: {
    type: String,
    required: true,
  },
  last_update: {
    type: String,
    required: true,
  },
});

const termsModel = mongo.model("terms", termsSchema);

module.exports = termsModel;
