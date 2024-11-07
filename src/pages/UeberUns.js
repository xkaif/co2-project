import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';

const UeberUns = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header title="Über Uns" subtitle="Lernen Sie Earthguardiens kennen" />
      <main className="container py-5 flex-grow-1">
        <section className="mb-5">
          <div className="row">
            <div className="col-12">
              <h2>Unsere Geschichte</h2>
              <p>
                Earthguardiens wurde 2023 mit einer klaren Vision gegründet: Den Umweltschutz 
                in Deutschland aktiv voranzutreiben. Was als kleine Initiative begann, hat sich zu 
                einer bedeutenden Organisation entwickelt, die Menschen zusammenbringt, die sich 
                für eine nachhaltige Zukunft einsetzen.
              </p>
              <p>
                Heute arbeiten wir mit einem engagierten Team von Umweltexperten, Wissenschaftlern 
                und freiwilligen Helfern daran, unsere Umwelt zu schützen und das Bewusstsein für 
                Nachhaltigkeit zu stärken.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="row">
            <div className="col-12">
              <h2>Unser Team</h2>
              <div className="row g-4 mt-3">
                <div className="col-md-4">
                  <Card 
                    title="Dr. Maria Schmidt"
                    content="Expertin für Umweltschutz mit über 15 Jahren Erfahrung in der Entwicklung nachhaltiger Strategien."
                    backgroundColor="white"
                    textColor="dark"
                  >
                    <p className="text-muted">Geschäftsführerin</p>
                  </Card>
                </div>
                <div className="col-md-4">
                  <Card 
                    title="Thomas Weber"
                    content="Verantwortlich für die Koordination unserer Umweltprojekte und die Zusammenarbeit mit Partnern."
                    backgroundColor="white"
                    textColor="dark"
                  >
                    <p className="text-muted">Projektleiter</p>
                  </Card>
                </div>
                <div className="col-md-4">
                  <Card 
                    title="Lisa Müller"
                    content="Entwickelt und leitet unsere Bildungsprogramme für Schulen und Organisationen."
                    backgroundColor="white"
                    textColor="dark"
                  >
                    <p className="text-muted">Umweltpädagogin</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default UeberUns;