/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


const Doctor = require('../models/Doctor');

// Controlador para crear un nuevo doctor
exports.createDoctor = (req, res) => {
  const { firstName, lastName, specialty, office, email } = req.body;
  const newDoctor = new Doctor({
    firstName,
    lastName,
    specialty,
    office,
    email,
  });
  newDoctor.save((err, doctor) => {
    if (err) {
      res.status(500).json({ error: 'No se pudo crear el doctor' });
    } else {
      res.status(201).json(doctor);
    }
  });
};

// Controlador para obtener todos los doctores
exports.getAllDoctors = (req, res) => {
  Doctor.find({}, (err, doctors) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener los doctores' });
    } else {
      res.status(200).json(doctors);
    }
  });
};
