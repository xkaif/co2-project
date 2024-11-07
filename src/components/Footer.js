import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-auto">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <img src={logo} alt="Earthguardiens Logo" style={{ height: '40px' }} />
          </div>
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <small className="text-muted">
              &copy; {new Date().getFullYear()} Earthguardiens. Alle Rechte vorbehalten.
            </small>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <nav className="nav justify-content-center justify-content-md-end">
              <Link to="/impressum" className="nav-link px-2 text-muted">Impressum</Link>
              <Link to="/datenschutz" className="nav-link px-2 text-muted">Datenschutz</Link>
              <Link to="/lizenzen" className="nav-link px-2 text-muted">Lizenzen</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
