// src/components/AbsenceConsultation.js
import React from 'react';
import './AbsenceConsultation.css'; // Custom CSS for styling

function AbsenceConsultation({ absences }) {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Absences des Enseignants</h2>
      <div className="list-group">
        {absences.map((absence, index) => (
          <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{absence.date}</strong> - {absence.enseignant} : {absence.raison}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AbsenceConsultation;
