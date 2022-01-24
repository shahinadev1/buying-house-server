const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  jobCategory: {
    type: String,
    required: true,
  },
  jobTags: {
    type: Array,
    required: true,
  },
  jobCreateDate: {
    type: String,
    required: true,
  },
  jobDuration: {
    type: Array,
    required: true,
  },
  jobSalary: {
    type: Array,
    required: true,
  },
  jobCondition: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("jobs", JobSchema);
