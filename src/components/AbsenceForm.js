// src/components/AbsenceForm.js
import React, { useState } from 'react';
import './AbsenceForm.css'; // Custom CSS for further styling

function AbsenceForm({ addAbsence }) {
  const [absence, setAbsence] = useState({
    date: '',
    enseignant: '',
    raison: ''
  });

  const handleChange = (e) => {
    setAbsence({
      ...absence,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAbsence(absence);
    setAbsence({ date: '', enseignant: '', raison: '' });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Déclarer une Absence</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label>Date :</label>
          <input
            type="date"
            name="date"
            value={absence.date}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Enseignant :</label>
          <input
            type="text"
            name="enseignant"
            value={absence.enseignant}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label>Raison :</label>
          <input
            type="text"
            name="raison"
            value={absence.raison}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">Déclarer Absence</button>
      </form>
    </div>
  );
}

export default AbsenceForm;
