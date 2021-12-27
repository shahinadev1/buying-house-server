const mongo = require("mongoose");
const { Schema } = mongo;
const FooterAddressSchema = new Schema({
  address: {
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
  added_date: {
    type: String,
    required: true,
  },
});

const footerAddressModel = mongo.model("footerAddress", FooterAddressSchema);

module.exports = footerAddressModel;
