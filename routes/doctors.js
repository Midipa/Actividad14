

const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController');

// Rutas para doctores
router.post('/', doctorController.createDoctor);
router.get('/', doctorController.getAllDoctors);

module.exports = router;
