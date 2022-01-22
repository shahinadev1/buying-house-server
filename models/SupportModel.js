const mongoose = require("mongoose");

const supportSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  supportIn: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: false,
  },
  whatsappNumber: {
    type: String,
    required: true,
  },
  added_date: {
    type: String,
    required: true,
  },
});
const supportModel = mongoose.model("supportForms", supportSchema);
module.exports = supportModel;
