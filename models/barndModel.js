const mongo = require("mongoose");
const { Schema } = mongo;
const brandSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  icon: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  added_date: {
    type: String,
    required: true,
  },
});

const brandModel = mongo.model("brand", brandSchema);

module.exports = brandModel;
