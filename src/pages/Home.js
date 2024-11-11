import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EmissionsTable from '../components/EmissionsTable';
import Card from '../components/Card';

const Home = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header title="Earthguardians" subtitle="Gemeinsam für eine nachhaltige Zukunft" />
      
      <main className="flex-grow-1">
        <div className="container mt-4">
          {/* Flex Container für Sidebar und Main Content */}
          <div className="d-flex flex-wrap flex-md-nowrap gap-4">
            
            {/* Sidebar */}
            <nav className="sidebar position-md-sticky" style={{ top: '2rem', height: 'fit-content' }}>
              <Card 
                title={<span style={{ color: '#00bc8c' }}>Lokale Navigation</span>}
                content={
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link fw-bold" href="#vision" style={{ color: '#00bc8c' }}>
                        Unsere Vision
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link fw-bold" href="#emissionen" style={{ color: '#00bc8c' }}>
                        Emissionsdaten
                      </a>
                    </li>
                  </ul>
                }
                className="sticky-card"
                backgroundColor="white"
              />
            </nav>

            {/* Main Content */}
            <div className="content">
              <section id="vision" className="mb-5">
                <h2 className="mb-4">Unsere Vision</h2>
                <p className="mb-5">
                  Bei Earthguardians glauben wir an die Kraft der Gemeinschaft für eine nachhaltige Zukunft. 
                  Als dynamisches Netzwerk von engagierten Unternehmen, Organisationen und Einzelpersonen 
                  setzen wir uns täglich für den Schutz unserer Erde ein.
                </p>
                <div className="row g-4">
                  {/* Cards for Vision Section */}
                  <div className="col-md-6">
                    <Card 
                      title="Umweltschutz"
                      icon="tree-fill"
                      content="Durch innovative Projekte und gezielte Initiativen engagieren wir uns aktiv für den Erhalt unserer Ökosysteme und die Bewahrung der biologischen Vielfalt."
                      titleColor="white"
                    />
                  </div>
                  
                  {/* Weitere Cards */}
                  <div className="col-md-6">
                    <Card 
                      title="Nachhaltigkeit"
                      icon="recycle"
                      content="Wir entwickeln zukunftsweisende Lösungen für einen ressourcenschonenden Lebensstil und inspirieren zu nachhaltigem Handeln im Alltag."
                      titleColor="white"
                    />
                  </div>
                  
                  <div className="col-md-12">
                    <Card 
                      title="Bildung"
                      icon="book-fill"
                      backgroundColor="linear-gradient(135deg, #3498db, #2980b9)"
                      content="Mit interaktiven Workshops und innovativen Bildungsprogrammen vermitteln wir praktisches Wissen für eine nachhaltige Lebensweise. Unsere erfahrenen Experten bieten maßgeschneiderte Schulungen für verschiedene Altersgruppen und Wissensniveaus an. Von Grundschulkindern bis hin zu Unternehmensteams – wir gestalten Bildung lebendig und praxisorientiert. Dabei setzen wir auf moderne Lehrmethoden und digitale Tools, um Umweltbildung zeitgemäß und effektiv zu vermitteln."
                      titleColor="white"
                    />
                  </div>
                </div>
              </section>

              <section id="emissionen" className="mb-5">
                <div>
                  <EmissionsTable />
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;