
import React from 'react';
import Page from '../components/Page';
import Button from '../components/Button';

const InfoSection: React.FC<{
  img: string;
  title: string;
  children: React.ReactNode;
  imgPosition?: 'left' | 'right';
}> = ({ img, title, children, imgPosition = 'left' }) => {
  const isImageLeft = imgPosition === 'left';
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}>
      <div className={`order-2 ${isImageLeft ? 'md:order-2' : 'md:order-1'}`}>
        <h3 className="text-3xl font-serif text-charcoal mb-4">{title}</h3>
        <div className="text-slate/90 leading-relaxed space-y-4">
          {children}
        </div>
      </div>
      <div className={`order-1 ${isImageLeft ? 'md:order-1' : 'md:order-2'}`}>
        <img src={img} alt={title} className="w-full h-auto object-cover shadow-xl" />
      </div>
    </div>
  );
};

const Dining: React.FC = () => {
  return (
    <Page title="World-Class Dining" subtitle="A culinary experience that delights the senses">
      <InfoSection img="https://picsum.photos/800/600?image=292" title="The Savanna Grill">
        <p>
          Experience the art of fine dining at The Savanna Grill, our signature restaurant. Our chefs create masterful dishes using locally sourced ingredients, offering a menu that is both innovative and timeless. The elegant ambiance and impeccable service provide the perfect setting for a memorable meal.
        </p>
        <Button to="/contact">Book a Table</Button>
      </InfoSection>

      <InfoSection img="https://picsum.photos/800/600?image=685" title="The Acacia Lounge" imgPosition="right">
        <p>
          For a more relaxed atmosphere, The Acacia Lounge offers a sophisticated space to enjoy handcrafted cocktails, premium wines, and a selection of light bites. It's the ideal spot for pre-dinner drinks or a quiet evening nightcap.
        </p>
        <p>Open daily from 5 PM to late.</p>
      </InfoSection>

       <InfoSection img="https://picsum.photos/800/600?image=1060" title="Private Dining">
        <p>
          For special occasions, we offer exclusive private dining rooms. Whether it's an intimate celebration or a corporate dinner, our team will curate a bespoke menu and experience tailored to your needs, ensuring an unforgettable event.
        </p>
        <Button to="/contact" variant="secondary">Inquire Now</Button>
      </InfoSection>
    </Page>
  );
};

export default Dining;
