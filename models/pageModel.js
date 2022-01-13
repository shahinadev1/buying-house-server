const mongoose = require("mongoose");

const pageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  addedUser: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  modified: {
    type: String,
    required: true,
  },
});
const pageModel = mongoose.model("pages", pageSchema);
module.exports = pageModel;
