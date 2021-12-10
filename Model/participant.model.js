const mongoose = require('mongoose');

const ParticipantSchema = new mongoose.Schema({
  firstname: { type: String, require: true },
  lastname: { type: String, require:true},
  courses:[mongoose.Types.ObjectId]
});

module.exports = mongoose.model('Participant',ParticipantSchema);