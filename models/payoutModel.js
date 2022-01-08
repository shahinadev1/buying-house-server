const mongo = require("mongoose");
const { Schema } = mongo;
const payoutSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: true,
  },
  shopName: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  paymentInformation: {
    type: String,
    required: true,
  },
  sendDate: {
    required: true,
    type: String,
  },
  status: {
    required: true,
    type: String,
    default: "pending",
  },
  adminReceived: {
    type: String,
    required: false,
  },
  added_date: {
    type: String,
    required: true,
  },
});

const payoutModel = mongo.model("payout", payoutSchema);

module.exports = payoutModel;
