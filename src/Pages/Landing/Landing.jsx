import React from 'react';

const Landing = () => {
  return (
    <div className='landing-page'>
      <div className='landing-page__container'>
        <main className='landing-page__main'>
          <h1 className='landing-page__title'>Keep track of your trades. Find your edge. Grow your profits.</h1>
          <h3 className='landing-page__subtitle'>
            Analyse your accounts. Find your most profitable trading strategies.
            Repeat.
          </h3>
          <button className='btn btn--primary btn--cta'>Sign up for free</button>
        </main>
        <div className='landing-page__graphic-column'>
          <div className='graphic'>
            <object
              aria-label='Light graphic background of finance related illustrations'
              className='graphic--background'
              type='image/svg+xml'
              data='./svg/icon-group.svg'></object>
            <object
              aria-label='Bright graphic background of finance related illustrations'
              className='graphic--front'
              type='image/svg+xml'
              data='./svg/icon-group2.svg'></object>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
