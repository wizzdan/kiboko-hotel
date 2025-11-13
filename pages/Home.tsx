
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const ServiceCard: React.FC<{ img: string; title: string; desc: string; link: string }> = ({ img, title, desc, link }) => (
  <div className="group relative overflow-hidden">
    <img src={img} alt={title} className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-6 text-center text-white">
      <h3 className="text-3xl font-serif mb-2">{title}</h3>
      <p className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{desc}</p>
      <Link to={link} className="uppercase tracking-widest text-sm font-bold border-b-2 border-gold pb-1 hover:text-gold transition-colors">
        Discover More
      </Link>
    </div>
  </div>
);

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="h-screen w-full relative flex items-center justify-center text-white text-center">
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <img src="https://picsum.photos/1920/1080?image=1074" alt="Luxurious lobby of Kiboko Hotel" className="absolute inset-0 w-full h-full object-cover" />
        <div className="relative z-20 p-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-4 tracking-tight">Elegance & Comfort Redefined</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 font-light">
            Kiboko Hotel – The Ultimate Five-Star Experience in Limuru.
          </p>
          <Button to="/contact">Explore Our Services</Button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">Welcome to Kiboko Hotel</h2>
          <p className="text-lg text-slate leading-relaxed">
            Nestled in the serene landscapes of Limuru, Kiboko Hotel is a sanctuary of luxury and sophistication. We invite you to indulge in an experience where every detail is crafted for your comfort and pleasure, from our world-class dining to our state-of-the-art facilities.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard 
          img="https://picsum.photos/800/600?image=27"
          title="Premium Rooms"
          desc="Indulge in comfort and style in our exquisitely designed rooms."
          link="/rooms"
        />
        <ServiceCard 
          img="https://picsum.photos/800/600?image=225"
          title="Fine Dining"
          desc="Exquisite culinary journeys crafted by our renowned chefs."
          link="/dining"
        />
        <ServiceCard 
          img="https://picsum.photos/800/600?image=1018"
          title="Events & Conferences"
          desc="Extraordinary gatherings in our elegant and versatile venues."
          link="/events-conferences"
        />
        <ServiceCard 
          img="https://picsum.photos/800/600?image=367"
          title="Wellness & Spa"
          desc="Unwind in serenity and rejuvenate your senses at our tranquil spa."
          link="/wellness-spa"
        />
        <ServiceCard 
          img="https://picsum.photos/800/600?image=15"
          title="Business Facilities"
          desc="Seamlessly conduct business with our premium services and technology."
          link="/business-meetings"
        />
      </section>
    </>
  );
};

export default Home;
