

import React from 'react';
import Page from '../components/Page';

const images = [
  { src: "https://picsum.photos/600/800?image=1074", alt: "kiboko-lobby" },
  { src: "https://picsum.photos/600/400?image=225", alt: "kiboko-restaurant-dish" },
  { src: "https://picsum.photos/600/400?image=1018", alt: "kiboko-banquet-hall" },
  { src: "https://picsum.photos/600/800?image=367", alt: "kiboko-spa-treatment" },
  { src: "https://picsum.photos/600/400?image=15", alt: "kiboko-conference-room" },
  { src: "https://picsum.photos/600/400?image=292", alt: "kiboko-dining-interior" },
  // FIX: Added missing opening quote to the src URL string.
  { src: "https://picsum.photos/600/400?image=21", alt: "kiboko-wedding-setup" },
  { src: "https://picsum.photos/600/800?image=1059", alt: "kiboko-spa-pool" },
  { src: "https://picsum.photos/600/400?image=12", alt: "kiboko-boardroom" },
];

const Gallery: React.FC = () => {
  return (
    <Page title="Our Gallery" subtitle="A visual journey through Kiboko Hotel">
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="mb-4 break-inside-avoid">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105 hover:shadow-2xl" 
            />
          </div>
        ))}
      </div>
    </Page>
  );
};

export default Gallery;
