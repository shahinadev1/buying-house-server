const mongo = require("mongoose");
const { Schema } = mongo;
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  category_name: {
    type: Object,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  price_regular: {
    type: String,
    required: true,
  },
  stock: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  image: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    required: true,
  },
  delivery_charge: {
    type: String,
    required: true,
  },
  delivery_time: {
    type: String,
    required: true,
  },
  added_by: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  added_date: {
    type: String,
    required: true,
  },
});

const productModel = mongo.model("products", productSchema);

module.exports = productModel;
