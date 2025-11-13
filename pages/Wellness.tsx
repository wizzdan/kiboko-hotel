
import React from 'react';
import Page from '../components/Page';
import Button from '../components/Button';

const Wellness: React.FC = () => {
  return (
    <Page title="Wellness & Spa" subtitle="Unwind in serenity and rejuvenate your senses">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-lg leading-relaxed">
          Escape the everyday at Serenity Spa, our tranquil haven dedicated to your well-being. Our expert therapists offer a range of treatments designed to restore balance to mind, body, and spirit. Complement your journey with a visit to our state-of-the-art fitness center or a relaxing swim in our pool.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-16">
        <div className="bg-white p-8 shadow-lg">
          <h3 className="text-2xl font-serif text-charcoal mb-3">Spa Treatments</h3>
          <p>Indulge in massages, facials, and body treatments using natural, locally sourced products.</p>
        </div>
        <div className="bg-white p-8 shadow-lg">
          <h3 className="text-2xl font-serif text-charcoal mb-3">Fitness Center</h3>
          <p>Stay active with our modern equipment, including cardio machines and free weights.</p>
        </div>
        <div className="bg-white p-8 shadow-lg">
          <h3 className="text-2xl font-serif text-charcoal mb-3">Swimming Pool</h3>
          <p>Relax and refresh by our pristine outdoor swimming pool with stunning views.</p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <img src="https://picsum.photos/1200/600?image=1059" alt="Serene spa interior" className="w-full shadow-xl mb-8" />
        <h3 className="text-3xl font-serif text-charcoal mb-4">Book Your Escape</h3>
        <p className="max-w-2xl mx-auto mb-6">
          Ready to experience pure relaxation? Contact our spa concierge to book your treatment or inquire about our wellness packages.
        </p>
        <Button to="/contact">Make an Enquiry</Button>
      </div>
    </Page>
  );
};

export default Wellness;
