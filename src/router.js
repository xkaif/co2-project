import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import Lizenzen from './pages/Lizenzen';
import Home from './pages/Home';
import UeberUns from './pages/UeberUns';

function RouterSrc() {
  return (
    <Router>
          <Routes>
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/lizenzen" element={<Lizenzen />} />
            <Route path="/ueberuns" element={<UeberUns />} />
            <Route path="/" element={<Home />} />
            {/* Weitere Routen können hier hinzugefügt werden */}
          </Routes>
    </Router>
  );
}

export default RouterSrc;
