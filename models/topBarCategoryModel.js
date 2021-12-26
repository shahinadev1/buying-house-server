const mongo = require("mongoose");
const { Schema } = mongo;
const topBarCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
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

const topBarCategoryModel = mongo.model(
  "topBarCategories",
  topBarCategorySchema
);

module.exports = topBarCategoryModel;
