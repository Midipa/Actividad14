

const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true },
  specialty: { type: String, required: true },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;

