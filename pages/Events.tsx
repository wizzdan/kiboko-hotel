
import React from 'react';
import Page from '../components/Page';
import Button from '../components/Button';

const FeatureList: React.FC<{ title: string; items: string[] }> = ({ title, items }) => (
  <div>
    <h4 className="text-xl font-serif text-charcoal mb-3">{title}</h4>
    <ul className="list-disc list-inside space-y-2 text-slate">
      {items.map((item, index) => <li key={index}>{item}</li>)}
    </ul>
  </div>
);

const Events: React.FC = () => {
  return (
    <Page title="Events & Conferences" subtitle="Host extraordinary gatherings in our elegant venues">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="https://picsum.photos/800/600?image=21" alt="Grand Ballroom at Kiboko Hotel" className="w-full shadow-xl" />
        </div>
        <div>
          <h3 className="text-3xl font-serif text-charcoal mb-4">The Grand Limuru Ballroom</h3>
          <p className="mb-6 leading-relaxed">
            Our magnificent ballroom is the perfect canvas for grand weddings, galas, and corporate events. With soaring ceilings, crystal chandeliers, and a flexible layout, it can be transformed to bring your vision to life.
          </p>
          <FeatureList title="Key Features" items={[
            'Capacity for up to 500 guests (banquet style)',
            'State-of-the-art audiovisual technology',
            'Customizable lighting systems',
            'Dedicated on-site event planning team',
            'Bespoke catering menus'
          ]} />
          <Button to="/contact" className="mt-6">Contact Our Events Team</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="md:order-2">
            <img src="https://picsum.photos/800/600?image=274" alt="Wedding ceremony setup" className="w-full shadow-xl" />
        </div>
        <div className="md:order-1">
          <h3 className="text-3xl font-serif text-charcoal mb-4">Unforgettable Weddings</h3>
          <p className="mb-6 leading-relaxed">
            Celebrate the most important day of your life at Kiboko Hotel. From intimate ceremonies on our terrace overlooking the Limuru hills to lavish receptions in our ballroom, we provide a stunning backdrop and meticulous service for a truly magical wedding.
          </p>
           <Button to="/gallery" variant="secondary">View Wedding Gallery</Button>
        </div>
      </div>
    </Page>
  );
};

export default Events;
