
import React, { useState } from 'react';
import Button from './Button';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center p-8 bg-ivory shadow-lg">
        <h3 className="text-2xl font-serif text-gold mb-2">Thank You!</h3>
        <p>Your message has been sent. Our team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate mb-1">Full Name</label>
        <input type="text" name="name" id="name" required className="w-full px-4 py-2 border border-slate/30 focus:ring-gold focus:border-gold transition" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate mb-1">Email Address</label>
        <input type="email" name="email" id="email" required className="w-full px-4 py-2 border border-slate/30 focus:ring-gold focus:border-gold transition" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate mb-1">Message</label>
        <textarea name="message" id="message" rows={5} required className="w-full px-4 py-2 border border-slate/30 focus:ring-gold focus:border-gold transition"></textarea>
      </div>
      <div>
        <Button type="submit">Send Message</Button>
      </div>
    </form>
  );
};

export default ContactForm;
