const mongoose = require("mongoose");

const upcomingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  added_date: {
    type: String,
    required: true,
  },
  last_update: {
    type: String,
    required: true,
  },
});
const upcomingModel = mongoose.model("upcomingPage", upcomingSchema);
module.exports = upcomingModel;
