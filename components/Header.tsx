
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Rooms', path: '/rooms' },
  { name: 'Dining', path: '/dining' },
  { name: 'Events & Conferences', path: '/events-conferences' },
  { name: 'Wellness & Spa', path: '/wellness-spa' },
  { name: 'Business & Meetings', path: '/business-meetings' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const leftLinks = navLinks.slice(0, 4);
const rightLinks = navLinks.slice(4);

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeLinkStyle = {
    color: '#c09a58',
    textDecoration: 'underline',
    textUnderlineOffset: '8px',
  };
  
  const linkClasses = "text-white hover:text-gold transition-colors duration-300 tracking-wider";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-charcoal shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Mobile and Tablet Header: Logo left, Hamburger right */}
        <Link to="/" className="lg:hidden text-2xl md:text-3xl font-serif text-white font-bold tracking-widest">
          Kiboko Hotel
        </Link>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>

        {/* Desktop Header: Centered Logo */}
        <div className="hidden lg:flex w-full items-center">
          <nav className="flex-1 flex justify-start items-center space-x-8">
            {leftLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={linkClasses}
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="flex-none px-4">
            <Link to="/" className="text-4xl font-serif text-white font-bold tracking-widest transition-transform duration-300 hover:scale-105">
              Kiboko Hotel
            </Link>
          </div>

          <nav className="flex-1 flex justify-end items-center space-x-8">
            {rightLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={linkClasses}
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

      </div>
      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <nav className="bg-charcoal px-6 pb-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`${linkClasses} text-lg`}
              style={({ isActive }) => isActive ? activeLinkStyle : {}}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
