const mongo = require("mongoose");
const { Schema } = mongo;

const paymentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  added_date: {
    type: String,
    required: true,
  },
});

const paymentModel = mongo.model("paymentOption", paymentSchema);

module.exports = paymentModel;
