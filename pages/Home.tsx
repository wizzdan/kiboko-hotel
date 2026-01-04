
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const ServiceCard: React.FC<{ img: string; title: string; desc: string; link: string }> = ({ img, title, desc, link }) => (
  <div className="group relative overflow-hidden h-[500px]">
    <img src={img} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
    <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent opacity-80"></div>
    <div className="absolute inset-0 flex flex-col items-center justify-end p-12 text-center text-white">
      <h3 className="text-3xl font-serif mb-3 tracking-wide">{title}</h3>
      <p className="mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 text-sm font-light">
        {desc}
      </p>
      <Link to={link} className="uppercase tracking-[0.2em] text-xs font-bold border-b border-gold pb-2 hover:text-gold transition-colors">
        Discover More
      </Link>
    </div>
  </div>
);

const Testimonial: React.FC<{ text: string; author: string; role: string }> = ({ text, author, role }) => (
  <div className="text-center px-4 max-w-2xl mx-auto">
    <p className="text-2xl font-serif italic text-charcoal/80 mb-6 leading-relaxed">"{text}"</p>
    <p className="font-bold text-gold uppercase tracking-widest text-sm">{author}</p>
    <p className="text-xs text-slate/60 mt-1">{role}</p>
  </div>
);

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen w-full relative flex items-center justify-center text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1920"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-luxury-resort-villa-with-swimming-pool-1249-large.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20 p-6 max-w-5xl">
          <span className="uppercase tracking-[0.5em] text-xs font-bold mb-4 block animate-fade-in">Experience Luxury in Limuru</span>
          <h1 className="text-5xl md:text-8xl font-serif mb-6 tracking-tight leading-tight">Where Timeless Elegance Meets Serenity</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light text-white/90 leading-relaxed">
            Kiboko Hotel is more than a stay; it's a journey into the heart of Kenyan hospitality, refined for the most discerning traveler.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button to="/rooms">Reserve Your Stay</Button>
            <Button to="/gallery" variant="secondary">View Gallery</Button>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-40 bg-ivory">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-tight">A Sanctuary of Tranquility in the Limuru Highlands</h2>
            <p className="text-lg text-slate/80 leading-relaxed mb-8">
              Nestled 7,000 feet above sea level, Kiboko Hotel offers a refreshing escape from the bustle of Nairobi. Surrounded by rolling tea plantations and misty hills, our five-star haven combines modern luxury with authentic Kenyan warmth.
            </p>
            <div className="grid grid-cols-2 gap-8 text-charcoal">
              <div>
                <p className="text-3xl font-serif mb-1">54</p>
                <p className="text-xs uppercase tracking-widest font-bold text-gold">Luxury Suites</p>
              </div>
              <div>
                <p className="text-3xl font-serif mb-1">3</p>
                <p className="text-xs uppercase tracking-widest font-bold text-gold">Award-Winning Spas</p>
              </div>
              <div>
                <p className="text-3xl font-serif mb-1">24/7</p>
                <p className="text-xs uppercase tracking-widest font-bold text-gold">Concierge Service</p>
              </div>
              <div>
                <p className="text-3xl font-serif mb-1">4.9</p>
                <p className="text-xs uppercase tracking-widest font-bold text-gold">Guest Rating</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" alt="Hotel Exterior" className="w-full shadow-2xl rounded-sm" />
            <div className="absolute -bottom-8 -left-8 bg-gold p-8 hidden md:block">
              <p className="text-white font-serif text-xl">The Gold Standard <br/>of Hospitality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <ServiceCard 
          img="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800"
          title="Refined Living"
          desc="Discover suites that blend contemporary comfort with heritage-inspired aesthetics."
          link="/rooms"
        />
        <ServiceCard 
          img="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800"
          title="Epicurean Journeys"
          desc="From high tea to fine dining, savor flavors crafted by our world-class culinary team."
          link="/dining"
        />
        <ServiceCard 
          img="https://images.unsplash.com/photo-1544161515-4af6b1d462c2?auto=format&fit=crop&q=80&w=800"
          title="Holistic Wellness"
          desc="Rejuvenate your essence in our sanctuary of wellness and spiritual balance."
          link="/wellness-spa"
        />
        <ServiceCard 
          img="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800"
          title="Curated Events"
          desc="Unforgettable milestones staged in the most breathtaking venues in Kiambu."
          link="/events-conferences"
        />
      </section>

      {/* AI Promo Section */}
      <section className="py-20 bg-charcoal text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="inline-block p-2 bg-gold/20 rounded-full mb-6">
            <div className="bg-gold p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Discover Limuru with our AI Concierge</h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Planning your trip? Chat with our digital concierge to discover hidden gems, tea farm tours, and real-time weather updates in the Limuru highlands.
          </p>
          <p className="text-gold font-bold text-sm tracking-[0.2em] uppercase cursor-pointer hover:underline" onClick={() => {
            // This is a bit of a hack to trigger the button from the AIConcierge component
            const btn = document.querySelector('button[aria-label="Open AI Concierge"]') as HTMLButtonElement;
            btn?.click();
          }}>
            Ask a Question Now &rarr;
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white border-b border-ivory">
        <Testimonial 
          text="An absolute oasis of calm. The service at Kiboko Hotel rivalled some of the best hotels I've stayed at in Europe. The views of the tea estates are simply breathtaking."
          author="Sarah Thompson"
          role="International Traveler"
        />
      </section>
    </>
  );
};

export default Home;
