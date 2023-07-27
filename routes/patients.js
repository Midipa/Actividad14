const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Rutas para pacientes
router.post('/', patientController.createPatient);
router.get('/', patientController.getAllPatients);

module.exports = router;

