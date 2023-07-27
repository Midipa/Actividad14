const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// Rutas para citas médicas
router.post('/', appointmentController.createAppointment);
router.get('/', appointmentController.getAllAppointments);

module.exports = router;
