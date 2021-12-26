const mongo = require("mongoose");
const { Schema } = mongo;
const navbarParentSchema = new Schema({
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

const navbarParentModel = mongo.model("parentNavbarMenu", navbarParentSchema);

module.exports = navbarParentModel;
