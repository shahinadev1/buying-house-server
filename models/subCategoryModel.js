const mongo = require("mongoose");
const { Schema } = mongo;
const topBarCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  icon: {
    type: String,
    required: true,
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

const subCategoryModel = mongo.model("subCategory", topBarCategorySchema);

module.exports = subCategoryModel;
