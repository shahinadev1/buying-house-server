const mongo = require("mongoose");
const { Schema } = mongo;
const subSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  parentId: {
    type: String,
    required: true,
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

const navbarSubModel = mongo.model("navbarSubMenu", subSchema);

module.exports = navbarSubModel;
