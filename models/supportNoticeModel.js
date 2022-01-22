const mongo = require("mongoose");
const { Schema } = mongo;
const supportNoticeSchema = new Schema({
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

const supportNoticeModel = mongo.model("supportNotice", supportNoticeSchema);

module.exports = supportNoticeModel;
