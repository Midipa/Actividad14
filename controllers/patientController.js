const Patient = require('../models/Patient');

// Controlador para crear un nuevo paciente
exports.createPatient = (req, res) => {
  const { firstName, lastName, idNumber, age, phone } = req.body;
  const newPatient = new Patient({
    firstName,
    lastName,
    idNumber,
    age,
    phone,
  });
  newPatient.save((err, patient) => {
    if (err) {
      res.status(500).json({ error: 'No se pudo crear el paciente' });
    } else {
      res.status(201).json(patient);
    }
  });
};

// Controlador para obtener todos los pacientes
exports.getAllPatients = (req, res) => {
  Patient.find({}, (err, patients) => {
    if (err) {
      res.status(500).json({ error: 'Error al obtener los pacientes' });
    } else {
      res.status(200).json(patients);
    }
  });
};

