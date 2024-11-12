// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logo from '../assets/gestion.png'; // Assurez-vous d'avoir le logo dans le dossier assets
import image from '../assets/image.png'; // Ajouter la nouvelle image

const HomePage = () => {
  return (
    <div>
      {/* Navbar professionnelle */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <img
              src={logo}
              alt="Logo Gestion"
              width="40"
              height="40"
              className="d-inline-block align-top me-2"
            />
            <span className="fw-bold">Gestion des Emplois du Temps</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/" className="me-3 text-white fw-semibold">Accueil</Nav.Link>
              <Nav.Link as={Link} to="/about" className="me-3 text-white fw-semibold">À propos</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="me-3 text-white fw-semibold">Contact</Nav.Link>
              <Button as={Link} to="/login" variant="outline-light" className="fw-semibold">
                Se Connecter
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contenu principal */}
      <div
        className="container-fluid d-flex flex-column justify-content-center align-items-center"
        style={{
          minHeight: '100vh',
          paddingTop: '80px',
          backgroundImage: `url(${image})`,
          backgroundSize: 'contain', // Taille moyenne pour l'image de fond
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          animation: 'zoomInOut 10s infinite ease-in-out', // Animation ajoutée
          color: '#333', // Texte en couleur sombre
          textShadow: '1px 1px 3px rgba(255, 255, 255, 0.7)', // Ombre de texte claire pour lisibilité
        }}
      >
        <h1 className="display-4 text-center">Bienvenue à la Gestion des Emplois du Temps</h1>
        <p className="lead text-center">Organisez et consultez facilement vos emplois du temps universitaires.</p>
      </div>

      {/* Footer (optionnel) */}
      <footer className="bg-light text-center text-lg-start mt-auto py-3">
        <Container>
          <span className="text-muted">&copy; 2024 Institut Supérieur des Études Technologiques de Tozeur</span>
        </Container>
      </footer>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes zoomInOut {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
