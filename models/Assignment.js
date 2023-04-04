const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  date: {
    type: String,
    require: true,
  },
  day: {
    type: String,
    require: true,
  },
  content: {
    type: String,
    require: true,
  },
  remarks: {
    type: String,
  },
  subject: {
    type: String,
    require: true,
  },
  codelink: {
    type: String,
  },
});

module.exports = mongoose.model("Assignment", AssignmentSchema);
