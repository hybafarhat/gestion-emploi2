// src/pages/AuthPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { FaUser, FaLock } from 'react-icons/fa';
import { Alert, Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import loginImage from '../assets/login.png'; // Ensure the image is in the assets folder

const AuthPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    setError('');
    console.log("Nom d'utilisateur:", username, "Mot de passe:", password);

    // Redirect to EmploiForm page after login
    navigate('/emploiForm');
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center">
      <Row className="w-100">
        {/* Left column with image */}
        <Col md={6} className="d-none d-md-block p-0">
          <div
            style={{
              backgroundImage: `url(${loginImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '100%',
              height: '100vh',
            }}
          />
        </Col>

        {/* Right column with form */}
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <div className="shadow p-4 rounded bg-light" style={{ width: '100%', maxWidth: '400px' }}>
            <h2 className="text-center mb-4">Connexion</h2>
            
            {error && <Alert variant="danger" className="text-center">{error}</Alert>}

            <Form onSubmit={handleLogin}>
              <Form.Group controlId="username" className="mb-3">
                <Form.Label>Nom d'utilisateur</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaUser />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Entrez votre nom d'utilisateur"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    isInvalid={error && !username}
                  />
                </InputGroup>
                <Form.Control.Feedback type="invalid">
                  Le nom d'utilisateur est requis.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="password" className="mb-3">
                <Form.Label>Mot de passe</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaLock />
                  </InputGroup.Text>
                  <Form.Control
                    type="password"
                    placeholder="Entrez votre mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isInvalid={error && !password}
                  />
                </InputGroup>
                <Form.Control.Feedback type="invalid">
                  Le mot de passe est requis.
                </Form.Control.Feedback>
              </Form.Group>

              <Button type="submit" variant="primary" className="w-100 fw-semibold">
                Se connecter
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AuthPage;
