const mongo = require("mongoose");
const { Schema } = mongo;
const childCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  parentId: {
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

const childCategoryModel = mongo.model("childCategory", childCategorySchema);

module.exports = childCategoryModel;
