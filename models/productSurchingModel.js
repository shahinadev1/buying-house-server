const mongoose = require("mongoose");

const productSurching = new mongoose.Schema({
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
const productSurchingModel = mongoose.model(
  "productSurchingPage",
  productSurching
);
module.exports = productSurchingModel;
