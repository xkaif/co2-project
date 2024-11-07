import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Lizenzen = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header title="Lizenzen" subtitle="Informationen zu verwendeten Lizenzen" />
      <main className="container py-5 flex-grow-1">
        <div className="row">
          <div className="col-12">
            <h2>Verwendete Lizenzen</h2>
            <p>
              Auf dieser Seite finden Sie Informationen zu den Lizenzen der verwendeten Logos, Icons und weiteren Assets.
            </p>

            <h3>Logo</h3>
            <p>
              Das Logo auf unserer Seite stammt aus folgender Quelle:
            </p>
            <ul>
              <li>
                Better TDA –– Earthguardians 1.0 - CC BY 4.0 Lizenz
                <br />
                <a href="https://www.figma.com/community/file/1394608426897437688/better-tda-earthguardians-1-0" target="_blank" rel="noopener noreferrer">
                  https://www.figma.com/community/file/1394608426897437688/better-tda-earthguardians-1-0
                </a>
              </li>
            </ul>

            <h3>Icons</h3>
            <p>
              Die auf unserer Website verwendeten Icons stammen aus folgenden Quellen:
            </p>
            <ul>
              <li>
                Bootstrap Icons - MIT Lizenz
                <br />
                <a href="https://icons.getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                  https://icons.getbootstrap.com/
                </a>
              </li>
            </ul>

            <h3>Frameworks und Bibliotheken</h3>
            <p>
              Unsere Website nutzt folgende Open-Source-Frameworks und -Bibliotheken:
            </p>
            <ul>
              <li>
                React - MIT Lizenz
                <br />
                <a href="https://github.com/facebook/react/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
                  https://github.com/facebook/react/blob/main/LICENSE
                </a>
              </li>
              <li>
                Bootstrap - MIT Lizenz
                <br />
                <a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
                  https://github.com/twbs/bootstrap/blob/main/LICENSE
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Lizenzen;