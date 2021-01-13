import React from 'react';

import Footer from '../Shared/Footer';

const Landing = () => {
  return (
    <div>
      <div className='landing-page'>
        <main className='landing-page__main'>
          <h1>Keep track of your trades. Find your edge. Grow your profits</h1>
          <h3>
            Analyse your accounts. Find your most profitable trading strategies.
            Repeat.
          </h3>
          <button className='btn btn--primary'>Sign up for free</button>
        </main>
        <div className='landing-page__graphic-container'></div>
        <Footer />;
      </div>
    </div>
  );
};

export default Landing;
