const mongo = require("mongoose");
const { Schema } = mongo;
const dealerPayoutSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  email: {
    type: String,
    required: true,
  },
  dealerId: {
    type: String,
    required: true,
  },
  dealer: {
    type: Object,
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

const dealerPayoutModel = mongo.model("dealerPayout", dealerPayoutSchema);

module.exports = dealerPayoutModel;
