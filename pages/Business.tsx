
import React from 'react';
import Page from '../components/Page';
import Button from '../components/Button';

const Business: React.FC = () => {
  return (
    <Page title="Business & Meetings" subtitle="Excellence and efficiency for the modern professional">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="https://picsum.photos/800/600?image=12" alt="Modern boardroom at Kiboko Hotel" className="w-full shadow-xl" />
        </div>
        <div>
          <h3 className="text-3xl font-serif text-charcoal mb-4">Executive Boardrooms</h3>
          <p className="mb-6 leading-relaxed">
            Our sophisticated boardrooms are designed to facilitate productive meetings. Equipped with the latest technology and offering complete privacy, they provide a professional environment for your most important discussions.
          </p>
          <ul className="list-disc list-inside space-y-2 text-slate">
            <li>High-speed Wi-Fi</li>
            <li>HD Video Conferencing Facilities</li>
            <li>Large-screen Displays</li>
            <li>On-site Catering Options</li>
            <li>Dedicated Support Staff</li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-12 my-16 shadow-lg text-center">
        <h3 className="text-3xl font-serif text-charcoal mb-4">Business Center</h3>
        <p className="max-w-3xl mx-auto leading-relaxed">
          Our fully-equipped business center provides everything you need to stay connected and productive during your stay. From printing and secretarial services to express check-in/out, we ensure a seamless experience for our business guests.
        </p>
        <Button to="/contact" className="mt-8">Enquire Now</Button>
      </div>
    </Page>
  );
};

export default Business;
