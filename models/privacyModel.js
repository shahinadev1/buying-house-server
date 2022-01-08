const mongo = require("mongoose");
const { Schema } = mongo;
const privacySchema = new Schema({
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

const privacyModel = mongo.model("privacy", privacySchema);

module.exports = privacyModel;
