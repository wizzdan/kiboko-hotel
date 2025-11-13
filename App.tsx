
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dining from './pages/Dining';
import Events from './pages/Events';
import Wellness from './pages/Wellness';
import Business from './pages/Business';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Rooms from './pages/Rooms';

// Utility component to scroll to top on page change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-ivory font-sans text-slate">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/dining" element={<Dining />} />
            <Route path="/events-conferences" element={<Events />} />
            <Route path="/wellness-spa" element={<Wellness />} />
            <Route path="/business-meetings" element={<Business />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
