const mongo = require("mongoose");
const { Schema } = mongo;
const childSubCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  parentCategory: {
    type: Object,
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

const childSubCategoryModel = mongo.model(
  "childSubCategory",
  childSubCategorySchema
);

module.exports = childSubCategoryModel;
