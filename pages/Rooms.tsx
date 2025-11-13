
import React from 'react';
import Page from '../components/Page';
import Button from '../components/Button';

const FeatureList: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div>
    <h4 className="text-xl font-serif text-charcoal mb-3">{title}</h4>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-slate">
      {items.map((item, index) => <li key={index} className="flex items-center"><span className="text-gold mr-2">&#10003;</span>{item}</li>)}
    </ul>
  </div>
);

const Rooms: React.FC = () => {
  return (
    <Page title="Our Luxurious Rooms" subtitle="Your personal sanctuary of comfort and style">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <div className="lg:col-span-3">
          <img src="https://picsum.photos/1000/800?image=659" alt="Deluxe King Room at Kiboko Hotel" className="w-full shadow-xl object-cover" />
        </div>
        <div className="lg:col-span-2 flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Deluxe King Room</h3>
          <p className="mb-6 leading-relaxed text-slate/90">
            Perfect for two adults, our Deluxe King Room is a haven of tranquility and elegance. Featuring a plush king-sized bed, a contemporary design with African-inspired accents, and expansive windows offering serene views of the Limuru landscape, this room is designed for ultimate relaxation.
          </p>
          <div className="mb-8">
            <FeatureList title="Room Amenities" items={[
              'Plush King-Sized Bed',
              'Luxurious En-suite Bathroom',
              'Walk-in Rain Shower',
              'High-Speed Wi-Fi',
              '55-inch 4K Smart TV',
              'Nespresso Coffee Machine',
              'In-room Safe',
              'Climate Control Air Conditioning'
            ]} />
          </div>
          <div className="flex items-center space-x-4">
             <Button to="/contact">Book Now</Button>
             <span className="text-2xl font-serif text-slate">from $250 / night</span>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Rooms;
