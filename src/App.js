// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';

import EmploiForm from './components/EmploiForm';
import EmploiDisplay from './components/EmploiDisplay';
import DashboardPage from './pages/DashboardPage';  // New page after login
import AbsenceForm from './components/AbsenceForm';  // Assuming this component exists
import AbsenceConsultation from './components/AbsenceConsultation';  // Assuming this component exists

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/EmploiForm" element={<EmploiForm />} />
        <Route path="/EmploiDisplay" element={<EmploiDisplay />} />
        <Route path="/AbsenceForm" element={<AbsenceForm />} />
        <Route path="/AbsenceConsultation" element={<AbsenceConsultation />} />
        <Route path="/dashboardPage" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
