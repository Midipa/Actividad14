const Appointment = require('../models/Appointment');

// Controlador para crear una nueva cita médica
exports.createAppointment = (req, res) => {
  const { patientId, specialty } = req.body;
  const newAppointment = new Appointment({
    patientId,
    specialty,
  });
  newAppointment.save((err, appointment) => {
    if (err) {
      res.status(500).json({ error: 'No se pudo crear la cita médica' });
    } else {
      res.status(201).json(appointment);
    }
  });
};

// Controlador para obtener todas las citas médicas
exports.getAllAppointments = (req, res) => {
  Appointment.find({})
    .populate('patientId', 'firstName lastName')
    .exec((err, appointments) => {
      if (err) {
        res.status(500).json({ error: 'Error al obtener las citas médicas' });
      } else {
        res.status(200).json(appointments);
      }
    });
};
