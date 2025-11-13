
import React from 'react';
import Page from '../components/Page';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  return (
    <Page title="Contact Us" subtitle="We look forward to welcoming you to Kiboko Hotel">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-serif text-charcoal mb-3">Get in Touch</h3>
            <p className="leading-relaxed">
              For reservations, event inquiries, or any other questions, please do not hesitate to contact us. Our dedicated team is here to assist you.
            </p>
          </div>
          <div className="space-y-4 text-slate">
            <div className="flex items-start space-x-4">
              <span className="text-gold mt-1">&#9679;</span>
              <div>
                <h4 className="font-bold">Address</h4>
                <p>Kiboko Hotel, Limuru, Kiambu County, Kenya</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-gold mt-1">&#9679;</span>
              <div>
                <h4 className="font-bold">Email</h4>
                <a href="mailto:reservations@kibokohotel.com" className="hover:text-gold">reservations@kibokohotel.com</a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <span className="text-gold mt-1">&#9679;</span>
              <div>
                <h4 className="font-bold">Phone</h4>
                <a href="tel:+254700123456" className="hover:text-gold">+254 700 123 456</a>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 shadow-lg">
            <ContactForm />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-serif text-charcoal mb-4 lg:mb-3">Our Location</h3>
          <div className="aspect-w-1 aspect-h-1 md:aspect-w-4 md:aspect-h-3 lg:h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63822.40058300262!2d36.604723049999995!3d-1.18561115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f26034057861b%3A0x535928670c327de5!2sLimuru!5e0!3m2!1sen!2ske!4v1672522564269!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kiboko Hotel Location"
              className="w-full h-full min-h-[400px] lg:min-h-0"
            ></iframe>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Contact;
