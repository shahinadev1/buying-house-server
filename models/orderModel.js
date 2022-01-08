const mongo = require("mongoose");
const { Schema } = mongo;

const orderSchema = new Schema({
  phone: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  order_date: {
    type: String,
    required: true,
  },
  payment_method: {
    type: Object,
    required: true,
  },
  sender_info: {
    type: String,
    required: true,
  },
  attached_file: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  products: {
    type: Object,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
  },
  user_email: {
    type: String,
    required: true,
  },
  order_status: {
    type: String,
    required: true,
  },
  shopEmail: {
    type: String,
    required: true,
  },
  orders: {
    type: Array,
    required: true,
  },
  added_date: {
    type: String,
    required: true,
  },
});

const orderModel = mongo.model("orders", orderSchema);

module.exports = orderModel;
