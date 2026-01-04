
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
import AIConcierge from './components/AIConcierge';

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
      <div className="bg-ivory font-sans text-slate min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
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
        <AIConcierge />
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
