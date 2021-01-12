import React from 'react';
import AccordionMenu from '../Accounts/Strategies/Menu/AccordionMenu';

import Footer from '../Shared/Footer';

const Landing = () => {
  return (
    <div className='landing-page'>
      <main className='landing-page__main'>
        <AccordionMenu />

      </main>
      <Footer />;
    </div>
  );
};



export default Landing;
