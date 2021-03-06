const mongo = require("mongoose");
const { Schema } = mongo;
const shopSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  dealerEmail: {
    type: String,
    unique: false,
    required: false,
  },
  shopName: {
    type: String,
    required: true,
    unique: true,
  },
  shopPhone: {
    type: String,
    required: true,
    unique: true,
  },
  shopAddress: {
    type: String,
    required: true,
  },
  dealer: {
    type: Object,
    required: false,
    default: {},
  },
  varified: {
    type: String,
    required: false,
    default: false,
  },
  create_date: {
    type: String,
    required: true,
  },
});

const shopModel = mongo.model("shop", shopSchema);

module.exports = shopModel;
