const mongoose = require('mongoose');

const CourSchema = new mongoose.Schema({
  label: { type: String, required: true },
  description: { type: String, default: "Description du cours" },
  volume: {type: Number, required:true, min:1}
});

module.exports = mongoose.model('Course',CourSchema);