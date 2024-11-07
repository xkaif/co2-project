import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Impressum = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header title="Impressum" subtitle="Rechtliche Informationen über Earthguardiens" />
      <main className="container py-5 flex-grow-1">
        <div className="row">
          <div className="col-12">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              Earthguardiens GmbH<br />
              Musterstraße 123<br />
              12345 Musterstadt
            </p>

            <h3>Vertreten durch</h3>
            <p>Max Mustermann</p>

            <h3>Kontakt</h3>
            <p>
              Telefon: +49 (0) 123 456789<br />
              E-Mail: info@earthguardiens.de
            </p>

            <h3>Registereintrag</h3>
            <p>
              Eintragung im Handelsregister<br />
              Registergericht: Amtsgericht Musterstadt<br />
              Registernummer: HRB 12345
            </p>

            <h3>Umsatzsteuer-ID</h3>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
              DE 123456789
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;