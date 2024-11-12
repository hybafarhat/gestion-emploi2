// src/pages/DashboardPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const DashboardPage = () => {
  return (
    <div>
      {/* Navbar with links to each section */}
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Gestion des Emplois du Temps</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/emploi-form">EmploiForm</Nav.Link>
              <Nav.Link as={Link} to="/emploi-display">EmploiDisplay</Nav.Link>
              <Nav.Link as={Link} to="/absence-form">AbsenceForm</Nav.Link>
              <Nav.Link as={Link} to="/absence-consultation">AbsenceConsultation</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Content placeholder */}
      <Container className="mt-4">
        <h2>Bienvenue sur le tableau de bord</h2>
        <p>Choisissez une option dans la barre de navigation pour commencer.</p>
      </Container>
    </div>
  );
};

export default DashboardPage;
