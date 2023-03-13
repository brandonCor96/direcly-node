const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  genre: {
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
  courses: {
    type: [String],
    default: [],
  },
  phone: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
  created: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Student', studentSchema);