const mongoose = require("mongoose");

const coronaPageSchema = new mongoose.Schema({
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
const coronaPageModel = mongoose.model("coronaPage", coronaPageSchema);
module.exports = coronaPageModel;
