
import React from 'react';

interface PageProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ title, subtitle, children }) => {
  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-6">
        <header className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-charcoal mb-2">{title}</h1>
          <p className="text-lg text-slate/80">{subtitle}</p>
        </header>
        <div className="space-y-16 md:space-y-24">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Page;
