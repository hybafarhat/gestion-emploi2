// src/components/EmploiForm.js
import React, { useState } from 'react';
import { FaCalendarAlt, FaClock, FaDoorOpen, FaChalkboardTeacher, FaBook } from 'react-icons/fa';

function EmploiForm({ addEmploi }) {
  const [emploi, setEmploi] = useState({
    date: '',
    heure: '',
    salle: '',
    enseignant: '',
    sujet: ''
  });

  const handleChange = (e) => {
    setEmploi({
      ...emploi,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmploi(emploi);
    setEmploi({ date: '', heure: '', salle: '', enseignant: '', sujet: '' });
  };

  return (
    <div className="container mt-4 p-4 bg-light rounded shadow">
      <h2 className="text-center mb-4">Ajouter un Emploi du Temps</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label"><FaCalendarAlt /> Date :</label>
          <input type="date" name="date" value={emploi.date} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label"><FaClock /> Heure :</label>
          <input type="time" name="heure" value={emploi.heure} onChange={handleChange} className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label"><FaDoorOpen /> Salle :</label>
          <input type="text" name="salle" value={emploi.salle} onChange={handleChange} placeholder="Nom de la salle" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label"><FaChalkboardTeacher /> Enseignant :</label>
          <input type="text" name="enseignant" value={emploi.enseignant} onChange={handleChange} placeholder="Nom de l'enseignant" className="form-control" required />
        </div>
        <div className="mb-3">
          <label className="form-label"><FaBook /> Sujet :</label>
          <input type="text" name="sujet" value={emploi.sujet} onChange={handleChange} placeholder="Sujet du cours" className="form-control" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Enregistrer</button>
      </form>
    </div>
  );
}

export default EmploiForm;
