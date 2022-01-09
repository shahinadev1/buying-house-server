const mongo = require("mongoose");
const { Schema } = mongo;
const agentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  agentId: {
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
    default: true,
  },
  profile: {
    type: String,
    required: false,
  },
  create_date: {
    type: String,
    required: true,
  },
});

const agentModel = mongo.model("agent", agentSchema);

module.exports = agentModel;
