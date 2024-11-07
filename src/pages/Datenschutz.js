import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Datenschutz = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header title="Datenschutz" subtitle="Informationen zum Datenschutz" />
      <main className="container py-5 flex-grow-1">
        <div className="row">
          <div className="col-12">
            <h2>Vorwort</h2>
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Hier informieren wir Sie über die Erhebung, Verarbeitung und Nutzung Ihrer Daten.
            </p>

            <h3>Verantwortliche Stelle</h3>
            <p>
              Earthguardiens GmbH<br />
              Musterstraße 123<br />
              12345 Musterstadt<br />
              E-Mail: info@earthguardiens.de
            </p>

            <h3>Erhebung und Verarbeitung von Daten</h3>
            <p>
              Bei der Nutzung unserer Website werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3>Cookies</h3>
            <p>
              Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und die bestimmte Einstellungen und Daten zum Austausch mit unserem System speichern.
            </p>

            <h3>Ihre Rechte</h3>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Außerdem haben Sie ein Widerspruchsrecht gegen die Verarbeitung.
            </p>

            <h3>Datensicherheit</h3>
            <p>
              Wir setzen technische und organisatorische Sicherheitsmaßnahmen ein, um Ihre personenbezogenen Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;