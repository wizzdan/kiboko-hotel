
import React from 'react';
import Page from '../components/Page';
import Button from '../components/Button';

const FeatureList: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div className="mt-6">
    <h4 className="text-sm font-bold uppercase tracking-widest text-gold mb-3">{title}</h4>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-slate/80 text-sm">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          <span className="text-gold mr-2 text-xs opacity-70">&#9679;</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const RoomCard: React.FC<{
  title: string;
  price: string;
  img: string;
  desc: string;
  features: string[];
  reverse?: boolean;
}> = ({ title, price, img, desc, features, reverse }) => (
  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32 last:mb-0`}>
    <div className={`lg:col-span-7 ${reverse ? 'lg:order-2' : ''}`}>
      <div className="relative group overflow-hidden shadow-2xl">
        <img src={img} alt={title} className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute top-6 right-6 bg-charcoal text-white px-4 py-2 text-sm font-bold tracking-widest uppercase">
          From {price}
        </div>
      </div>
    </div>
    <div className={`lg:col-span-5 ${reverse ? 'lg:order-1' : ''}`}>
      <h3 className="text-4xl font-serif text-charcoal mb-4">{title}</h3>
      <p className="text-slate/80 leading-relaxed mb-6">
        {desc}
      </p>
      <FeatureList title="Highlights" items={features} />
      <div className="mt-10 flex items-center space-x-6">
        <Button to="/contact">Check Availability</Button>
        <button className="text-xs uppercase tracking-widest font-bold border-b border-charcoal/20 pb-1 hover:border-gold transition-colors">
          View Detailed Floorplan
        </button>
      </div>
    </div>
  </div>
);

const Rooms: React.FC = () => {
  return (
    <Page title="Luxurious Living" subtitle="Choose from our curated selection of suites and rooms designed for ultimate repose">
      <div className="max-w-7xl mx-auto">
        <RoomCard 
          title="The Presidential Suite"
          price="$850 / Night"
          img="https://images.unsplash.com/photo-1578683010236-d716f9759678?auto=format&fit=crop&q=80&w=1200"
          desc="Our crown jewel, offering the pinnacle of luxury. This 150sqm suite features a separate living area, a private dining room, and an expansive terrace with panoramic views of the Kiambu hills."
          features={[
            '24-Hour Dedicated Butler',
            'Private Jacuzzi & Steam Room',
            'Full Kitchen & Bar',
            'Complimentary Limousine Service',
            'VIP Airport Clearance',
            'Premium Sound System'
          ]}
        />

        <RoomCard 
          title="Executive Garden Suite"
          price="$420 / Night"
          img="https://images.unsplash.com/photo-1591088398332-8a7761a97044?auto=format&fit=crop&q=80&w=1200"
          desc="Ideal for long-stay guests or those seeking extra space. The Garden Suite opens directly onto our private botanical grounds, allowing you to wake up to the sound of local birdlife and the scent of blooming jasmine."
          features={[
            'Private Garden Terrace',
            'Spacious Lounge Area',
            'Luxury Bathing Rituals',
            'In-Room Wellness Kit',
            'Executive Work Station',
            'Daily Fresh Flowers'
          ]}
          reverse
        />

        <RoomCard 
          title="Deluxe King Room"
          price="$250 / Night"
          img="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=1200"
          desc="A masterpiece of understated elegance. Perfect for solo travelers or couples, featuring our signature cloud-sleep mattress and a curated mini-bar with local Kenyan delights."
          features={[
            'King-Sized Signature Bed',
            'Walk-in Rainfall Shower',
            'High-Speed Connectivity',
            'Artisan Coffee Selection',
            'Smart Climate Control',
            '24-Hour In-Room Dining'
          ]}
        />
      </div>

      <div className="mt-32 bg-charcoal p-12 text-center text-white rounded-sm shadow-xl">
        <h3 className="text-3xl font-serif text-gold mb-4">The Kiboko Experience</h3>
        <p className="max-w-2xl mx-auto mb-8 text-white/70">
          All guests enjoy complimentary high-speed Wi-Fi, access to our fitness center and heated swimming pool, and a daily signature Kenyan breakfast.
        </p>
        <div className="flex justify-center space-x-12 opacity-80 grayscale hover:grayscale-0 transition-all">
          <div className="flex flex-col items-center">
            <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 20 20"><path d="M13 7H7v6h6V7z"/><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 9H5v2h2V9zm10 0h-2v2h2V9zM9 9H7v2h2V9zm0 4H7v2h2v-2zm2-4H9v2h2V9zm0 4H9v2h2v-2zm2-4h-2v2h2V9zm0 4h-2v2h2v-2z" clipRule="evenodd"/></svg>
            <span className="text-[10px] uppercase tracking-widest">WiFi</span>
          </div>
          <div className="flex flex-col items-center">
            <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/></svg>
            <span className="text-[10px] uppercase tracking-widest">Gym</span>
          </div>
          <div className="flex flex-col items-center">
             <svg className="w-8 h-8 mb-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-7.535 5.354a1 1 0 001.415 0l4.242-4.243a1 1 0 10-1.414-1.414l-4.243 4.242a1 1 0 000 1.415z" clipRule="evenodd"/></svg>
             <span className="text-[10px] uppercase tracking-widest">Pool</span>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Rooms;
