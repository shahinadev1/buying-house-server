const mongo = require("mongoose");
const { Schema } = mongo;
const sliderSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  added_date: {
    type: String,
    required: true,
  },
});

const sliderModel = mongo.model("slider", sliderSchema);

module.exports = sliderModel;
