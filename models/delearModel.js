const mongo = require("mongoose");
const { Schema } = mongo;
const dealerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  dealerId: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  district: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  fullAddress: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: false,
    default: false,
  },
  agentId: {
    type: String,
    required: false,
  },
  agent: {
    type: Object,
    required: false,
    default: {},
  },
  profile: {
    type: String,
    required: false,
  },
  agentEmail: {
    type: String,
    required: false,
  },
  create_date: {
    type: String,
    required: true,
  },
});

const dealerModel = mongo.model("dealers", dealerSchema);

module.exports = dealerModel;
