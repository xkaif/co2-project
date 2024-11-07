import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Header = ({ title, subtitle }) => {
  const [isRTL, setIsRTL] = useState(false);

  const toggleDirection = () => {
    const newDir = isRTL ? 'ltr' : 'rtl';
    document.documentElement.setAttribute('dir', newDir);
    setIsRTL(newDir === 'rtl');
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Earthguardiens Logo" height="50" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/ueberuns">Über uns</Link>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick={toggleDirection}>{isRTL ? 'RTL' : 'LTR'}</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section style={{
        background: 'linear-gradient(135deg, #00bc8c, #2ecc71)',
        padding: '4rem 0'
      }}>
        <div className="container">
          <h1 className="text-center text-white mb-4 display-1">{title}</h1>
          <p className="text-center text-white fs-5">{subtitle}</p>
        </div>
      </section>
    </header>
  );
};

export default Header;