const mongoose = require("mongoose");
const { Schema } = mongoose;

const reviewSchema = new Schema({
  product: {
    type: Object,
    required: true,
  },
  user: {
    type: Object,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  ratting: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: false,
  },
});

const reviewModel = mongoose.model("reviews", reviewSchema);
module.exports = reviewModel;
