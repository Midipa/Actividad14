
"use strict";
(function () {

    function App() {

        var self = this;
        self.messages = ko.observableArray([]);
        self.currentMessage = ko.observable("");

        self.buttonEnabled = ko.computed(function(){
           return self.currentMessage().length > 0;
        });

        self.sendText = function () {
            window.console.log("sending");
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    receive(this.responseText);
                }
            };
            xhr.open("GET", "api/string/" + encodeURIComponent(self.currentMessage()), true);
            xhr.send();

        };


        function receive(responseText) {
            self.messages.push(JSON.parse(responseText));
        }

        ko.components.register("messages", {
            viewModel: function () {
                this.messages = self.messages;
            },

            template: "<table><thead><tr><th>Original message</th><th>Response</th></tr></thead><tbody data-bind='foreach: messages'><tr><td data-bind='text: original'></td><td data-bind='text: reverted'></td></tr></tbody></table>"
        });
        ko.components.register("mytitle", {
            viewModel: function (params) {
                this.title = ko.observable(params.title);
            },

            template: "<h2 data-bind='text: title'></h2>"
        });

    }

    ko.applyBindings(new App());

})();



const patientForm = document.getElementById('patientForm');
const patientList = document.getElementById('patientList');

patientForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(patientForm);
  const patientData = {};
  formData.forEach((value, key) => {
    patientData[key] = value;
  });

  fetch('/api/patients', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(patientData),
  })
  .then((response) => response.json())
  .then((data) => {
    patientForm.reset();
    console.log('Paciente guardado:', data);
  })
  .catch((error) => {
    console.error('Error al guardar el paciente:', error);
  });
});

fetch('/api/patients')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((patient) => {
      const listItem = document.createElement('li');
      listItem.innerText = `${patient.firstName} ${patient.lastName}, Cédula: ${patient.idNumber}, Edad: ${patient.age}, Teléfono: ${patient.phone}`;
      patientList.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error('Error al obtener los pacientes:', error);
  });

const appointmentForm = document.getElementById('appointmentForm');
const appointmentList = document.getElementById('appointmentList');

appointmentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(appointmentForm);
  const appointmentData = {};
  formData.forEach((value, key) => {
    appointmentData[key] = value;
  });

  fetch('/api/appointments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(appointmentData),
  })
  .then((response) => response.json())
  .then((data) => {
    appointmentForm.reset();
    console.log('Cita guardada:', data);
  })
  .catch((error) => {
    console.error('Error al guardar la cita:', error);
  });
});

fetch('/api/appointments')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((appointment) => {
      const listItem = document.createElement('li');
      listItem.innerText = `Paciente: ${appointment.patientId.firstName} ${appointment.patientId.lastName}, Especialidad: ${appointment.specialty}`;
      appointmentList.appendChild(listItem);
    });
  })
  .catch((error) => {
    console.error('Error al obtener las citas:', error);
  });




