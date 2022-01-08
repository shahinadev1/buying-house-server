const mongo = require("mongoose");
const { Schema } = mongo;
const generalSchema = new Schema({
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

const generalModel = mongo.model("general", generalSchema);

module.exports = generalModel;
