// src/components/EmploiDisplay.js
import React from 'react';
import './EmploiDisplay.css';
import logo from '../assets/gestion.png';

function EmploiDisplay({ emplois }) {
  const horaires = [
    '08h30 - 10h00',
    '10h10 - 11h40',
    '11h50 - 13h20',
    '14h30 - 16h00',
    '16h10 - 17h40'
  ];

  const jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <img src={logo} alt="Logo Gestion" style={{ width: '150px', height: 'auto' }} />
      </div>
      <h2 className="text-center mb-4">Emploi du Temps</h2>
      <table className="table table-striped table-bordered table-hover">
        <thead className="thead-dark">
          <tr>
            <th>Heure</th>
            {jours.map((jour, index) => (
              <th key={index}>{jour}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {horaires.map((heure, hIndex) => (
            <tr key={hIndex}>
              <td>{heure}</td>
              {jours.map((jour, jIndex) => (
                <td key={jIndex}>
                  {emplois[jour] && emplois[jour][hIndex] ? (
                    <>
                      <div>{emplois[jour][hIndex].sujet}</div>
                      <div>{emplois[jour][hIndex].enseignant}</div>
                      <div>{emplois[jour][hIndex].salle}</div>
                    </>
                  ) : (
                    <div>Libre</div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmploiDisplay;
