/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  specialty: { type: String, required: true },
  office: { type: String, required: true },
  email: { type: String, required: true },
});

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;

