
import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <a href="#" className="text-ivory hover:text-gold transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-ivory/80 pt-16 pb-8 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        <div className="lg:col-span-2">
          <h3 className="text-2xl font-serif text-white font-bold tracking-widest mb-4">Kiboko Hotel</h3>
          <p className="max-w-md text-sm leading-relaxed">
            Discover an oasis of luxury and tranquility in the heart of Limuru, Kenya. Kiboko Hotel offers an unparalleled five-star experience with world-class amenities and impeccable service.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-serif text-white mb-4 tracking-wider">Contact Us</h4>
          <address className="not-italic text-sm space-y-2">
            <p>Limuru, Kiambu County, Kenya</p>
            <p>Email: <a href="mailto:reservations@kibokohotel.com" className="hover:text-gold">reservations@kibokohotel.com</a></p>
            <p>Phone: <a href="tel:+254700123456" className="hover:text-gold">+254 700 123 456</a></p>
          </address>
        </div>
        <div>
          <h4 className="text-lg font-serif text-white mb-4 tracking-wider">Follow Us</h4>
          <div className="flex space-x-4">
            <SocialIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </SocialIcon>
            <SocialIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </SocialIcon>
            <SocialIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </SocialIcon>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center border-t border-slate pt-8 mt-12 text-xs">
        &copy; {new Date().getFullYear()} Kiboko Hotel. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
