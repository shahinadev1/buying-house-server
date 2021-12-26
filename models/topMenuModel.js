const mongo = require("mongoose");
const { Schema } = mongo;
const topMenuSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  destination: {
    type: String,
    required: true,
    unique: true,
  },
  added_by: {
    type: String,
  },
  added_date: {
    type: String,
    required: true,
  },
  modified_date: {
    type: String,
    required: false,
  },
});

const topMenuModel = mongo.model("topMenu", topMenuSchema);

module.exports = topMenuModel;
