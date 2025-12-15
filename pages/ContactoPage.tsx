import React from 'react';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import CTAFinal from '../components/CTAFinal';

const ContactoPage: React.FC = () => {
  return (
    <div style={{ marginTop: '5%' }}>
      <FAQ />
      <Contact />
      <CTAFinal />
    </div>
  );
};

export default ContactoPage;
