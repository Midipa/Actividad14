const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  idNumber: { type: String, required: true },
  age: { type: Number, required: true },
  phone: { type: String, required: true },
});

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
